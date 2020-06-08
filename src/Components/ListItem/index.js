import React from "react";
import { Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Container,
  RedLine,
  ItemContent,
  Content,
  IconContainer,
  IconDelete,
  IconEdit,
  ItemTitle,
  ItemTitleText,
  ItemQuantity,
  ItemQuantityText,
  ItemPrice,
  ItemPriceText,
  LineTrace,
} from "./styles";
import colors from "../../styles/colors";

const ListItem = ({
  content,
  price,
  quantity,
  deleteItem,
  editItem,
  purchased,
  onPurchased,
}) => {
  return (
    <Container>
      <RedLine />
      <ItemContent>
        <LineTrace purchased={purchased} />
        <Content onPress={onPurchased}>
          <ItemTitle>
            <ItemTitleText>{content}</ItemTitleText>
          </ItemTitle>

          <ItemQuantity>
            <ItemQuantityText>{quantity}</ItemQuantityText>
          </ItemQuantity>

          <ItemPrice>
            <ItemPriceText>{price}</ItemPriceText>
          </ItemPrice>
        </Content>

        <IconContainer>
          <IconEdit onPress={editItem}>
            <Icon name="edit" size={20} color={colors.light} />
          </IconEdit>

          <IconDelete onPress={deleteItem}>
            <Icon name="delete" size={20} color={colors.light} />
          </IconDelete>
        </IconContainer>
      </ItemContent>
    </Container>
  );
};

export default ListItem;
