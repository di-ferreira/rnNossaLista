import React, {useState, useEffect} from 'react';

import {Text, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  ListContainer,
  TitleContainer,
  Title,
  NewItemContainer,
  ItemName,
  ItemAmount,
  ItemPrice,
  SendButton,
  Header,
  LabelItem,
  LabelQuantity,
  LabelPrice,
  ContainerTotalItems,
  TotalText,
  TotalNumber,
  SaveButtonContainer,
  SaveButton,
} from './styles';

import {formatPrice} from '../../util/format';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ListItem from '../../Components/ListItem';

export default function List({route, navigation}) {
  //- state lista
  const [lists, setLists] = useState([]);
  const [idList, setIdList] = useState(route.params?.id);
  const [title, setTitle] = useState(route.params?.title);
  const [listItems, setListItems] = useState([]);
  const [totalList, setTotalList] = useState(0);
  const [totalListFormated, setTotalListFormated] = useState();

  //- state items
  const [idItem, setIdItem] = useState();
  const [content, setContent] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [totalItem, setTotalItem] = useState();
  const [purchased, setPurchased] = useState(false);
  const [isEditItem, setIsEditItem] = useState(false);

  //- carrega lista
  useEffect(() => {
    AsyncStorage.getItem('lists').then((data) => {
      if (data) {
        const storedLists = JSON.parse(data);
        setLists(storedLists);
      }
    });
  }, []);

  //- carrega itens e total da lista
  useEffect(() => {
    if (lists !== []) {
      lists.map((list) => {
        if (list.id === idList) {
          setListItems(list.listItems);
          setTotalList(list.totalList);
        }
      });
    }
  }, [lists]);

  //- verifica o price
  useEffect(() => {
    if (quantity) {
      if (isEditItem === false) {
        setPrice(0.0);
      }
    }
  }, [quantity, isEditItem]);

  //- calcula total do item
  useEffect(() => {
    if (price) {
      let convertedPrice = dotToComma(price);
      setTotalItem(convertedPrice * quantity);
    } else {
      setTotalItem(0);
    }
  }, [price, quantity]);

  const dotToComma = (value) => {
    if (value === 0 || Number.isNaN(value)) {
      value = '0,0';
    }

    let newPrice = value.replace(',', '.');
    return parseFloat(newPrice);
  };

  const commaToDot = (value) => {
    if (value === 0 || Number.isNaN(value)) {
      value = 0.0;
    }
    let newPrice = String(value).replace('.', ',');
    return newPrice;
  };

  //- Calcula o total da lista
  useEffect(() => {
    const totalPrice = listItems.reduce((sum, listItems) => {
      return sum + listItems.totalItem;
    }, 0);
    const totalPriceFormated = formatPrice(totalPrice);

    setTotalList(totalPrice);

    setTotalListFormated(totalPriceFormated);
  }, [listItems, price, quantity]);

  //- deleta um item
  const deletItem = (id) => {
    const newlist = listItems.filter((item) => item.id !== id);

    setListItems(newlist);
  };

  //- edita um item
  const editItem = (id) => {
    const editableItem = listItems.map((item) => {
      if (item.id === id) {
        setIdItem(item.id);
        setContent(item.content);
        let convertesPrice = commaToDot(item.price);
        setPrice(convertesPrice);
        setQuantity(item.quantity);
      }
    });

    setIsEditItem(true);
  };

  //- verifica se item não esta com nome e quantidade vazio
  const validateItem = () => {
    if (!content) {
      return false;
    } else if (!quantity) {
      return false;
    }

    return true;
  };

  //- marca se foi comprado
  const onPurchased = (id) => {
    const newItem = listItems.map((item) => {
      if (item.id === id) {
        item.purchased = !item.purchased;
      }
      return item;
    });

    setListItems(newItem);
  };

  //- Insere o item na lista
  const insertItem = () => {
    if (validateItem()) {
      //- edita item existente
      if (isEditItem) {
        let editableList = listItems;
        let convertedPrice = dotToComma(price);
        editableList.map((itemEdited) => {
          if (itemEdited.id === idItem) {
            itemEdited.content = content;
            itemEdited.price = convertedPrice;
            itemEdited.priceFormated = formatPrice(convertedPrice);
            itemEdited.quantity = quantity;
            itemEdited.totalItem = totalItem;
          }
          return itemEdited;
        });
        setListItems(editableList);

        setIsEditItem(false);
      } else {
        //- cria novo item
        //- gera um novo ID
        let id = listItems.length + 1;

        listItems.map((item) => {
          if (item.id === id) {
            let newId = item.id + 1;

            id = newId;
          }
        });
        let convertedPrice = dotToComma(price);
        const data = {
          id,
          content,
          price: convertedPrice,
          priceFormated: formatPrice(convertedPrice),
          quantity,
          totalItem,
          purchased,
        };

        listItems.push(data);
      }
      setContent('');
      setPrice('');
      setQuantity('');
      setTotalItem('');
      setIdItem(0);
    } else {
      //- caso não tenha o nome do item
      if (!content) {
        Alert.alert('', 'Por favor insira um nome para o item!', [
          {text: 'OK'},
        ]);
      } else {
        //- caso não tenha a quantidade do item
        Alert.alert('', 'Por favor insira a quantidade do item!', [
          {text: 'OK'},
        ]);
      }
    }
  };

  //- Salva a lista completa
  const saveList = async (id) => {
    let editedLists = lists.map((editedList) => {
      if (editedList.id === id) {
        editedList.title = title;
        editedList.listItems = listItems;
        editedList.totalList = totalList;
      }
      return editedList;
    });

    await setLists(editedLists);
    await AsyncStorage.setItem('lists', JSON.stringify(lists));
    Alert.alert('', 'Lista salva com sucesso!', [
      {text: 'Continuar editando'},
      {
        text: 'Sair',
        onPress: () => navigation.navigate('Main'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>
          <Text> Lista {title} </Text>
        </Title>
      </TitleContainer>

      <Header>
        <LabelItem>Item</LabelItem>
        <LabelQuantity>Qtd.</LabelQuantity>
        <LabelPrice>R$</LabelPrice>
      </Header>

      <ListContainer
        data={listItems}
        renderItem={({item}) => (
          <ListItem
            content={item.content}
            quantity={item.quantity}
            price={item.priceFormated}
            purchased={item.purchased}
            onPurchased={() => onPurchased(item.id)}
            editItem={() => editItem(item.id)}
            deleteItem={() => deletItem(item.id)}
          />
        )}
        keyExtractor={(item) => String(item.id)}
      />

      <ContainerTotalItems>
        <TotalText>Total:</TotalText>

        <TotalNumber>
          {totalListFormated ? totalListFormated : 'R$0,00'}
        </TotalNumber>
      </ContainerTotalItems>

      <SaveButtonContainer
        onPress={() => {
          saveList(idList);
        }}>
        <SaveButton>Salvar Lista</SaveButton>
      </SaveButtonContainer>

      <NewItemContainer>
        <ItemName
          name="item"
          placeholder="Insira o item"
          returnKeyType="next"
          value={content}
          onChangeText={(text) => {
            setContent(text);
          }}
          onSubmitEditing={() => {
            this.amount.focus();
          }}
          blurOnSubmit={false}
        />

        <ItemAmount
          name="amount"
          placeholder="qtd"
          keyboardType="numeric"
          returnKeyType="next"
          value={quantity ? String(quantity) : ''}
          onChangeText={(qtd) => {
            setQuantity(parseInt(qtd));
          }}
          blurOnSubmit={false}
          ref={(input) => {
            this.amount = input;
          }}
          onSubmitEditing={() => {
            this.price.focus();
          }}
        />

        <ItemPrice
          name="price"
          placeholder="R$"
          keyboardType="decimal-pad"
          returnKeyType="send"
          value={price ? String(price) : ''}
          onChangeText={(price) => {
            price ? setPrice(price) : setPrice(0);
          }}
          blurOnSubmit={true}
          ref={(input) => {
            this.price = input;
          }}
          onSubmitEditing={() => {
            this.price.blur();
            this.amount.blur();
            insertItem();
          }} //enviar o form
        />

        <SendButton
          onPress={() => {
            this.price.blur();
            this.amount.blur();
            insertItem();
          }}>
          <Icon name="send" size={25} />
        </SendButton>
      </NewItemContainer>
    </Container>
  );
}
