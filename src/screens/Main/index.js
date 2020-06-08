import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons';

import List from '../../Components/List';

import {
  Wraper,
  Container,
  IconContainer,
  InputText,
  ContainerInput,
  ListContainer,
} from './styles';

export default function Main({ navigation }) {
  const [lists, setLists] = useState([]);

  const [title, setTitle] = useState();
  const [listItems, setListItems] = useState([]);
  const [totalList, setTotalList] = useState(0);
  const [loading, setLoading] = useState(false);

  //- carrega listas primeira vez
  useEffect(() => {
    loadingLists();
  }, []);

  //- carrega listas quando state lists é alterado
  useEffect(() => {
    loadingLists();
  }, [lists]);

  //- carrega listas
  const loadingLists = () => {
    AsyncStorage.getItem('lists').then((data) => {
      if (data) {
        const storedLists = JSON.parse(data);
        setLists(storedLists);
      }
    });
  };

  //- deleta lista
  const deleteList = async (id) => {
    let newLists = lists.filter((list) => list.id !== id);
    await AsyncStorage.setItem('lists', JSON.stringify(newLists));
    setLists(newLists);
  };

  //- edita lista
  const editList = (id, title) => {
    navigation.navigate('List', { title: title, id: id });
  };

  const isValid = () => {
    let listTitle = '';

    lists.map((list) => {
      if (list.title === title) {
        listTitle = list.title;
      }
    });

    if (title !== undefined && title !== '') {
      if (listTitle !== title) {
        return true;
      }
    }
    return false;
  };

  const createNewList = async () => {
    if (isValid()) {
      //- cria uma nova lista

      setLoading(true);
      //- gera um novo ID
      let id = lists.length + 1;

      lists.map((item) => {
        if (item.id === id) {
          let newId = item.id + 1;

          id = newId;
        }
      });

      const data = {
        id,
        title,
        listItems,
        totalList,
      };

      lists.push(data);

      await AsyncStorage.setItem('lists', JSON.stringify(lists));

      navigation.navigate('List', { title: title, id: id });
      setLoading(false);
      setTitle('');
    } else if (title && !isValid()) {
      Alert.alert('', 'Já existe uma lista com esse nome.', [{ text: 'OK' }]);
    } else {
      Alert.alert('', 'Por favor insira um nome para a lista.', [
        { text: 'OK' },
      ]);
    }
  };

  return (
    <Wraper>
      <Container>
        <ListContainer
          data={lists}
          renderItem={({ item }) => (
            <List
              title={item.title}
              totalList={item.totalList}
              deleteList={() => deleteList(item.id)}
              editList={() => editList(item.id, item.title)}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
        <ContainerInput>
          <InputText
            placeholder="Adicionar nova Lista"
            value={title}
            onChangeText={(text) => {
              setTitle(text);
            }}
          />
          <IconContainer onPress={() => createNewList()}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" color="#fff" size={30} />
            )}
          </IconContainer>
        </ContainerInput>
      </Container>
    </Wraper>
  );
}
