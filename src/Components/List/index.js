import React from "react";
import { Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Container,
  Content,
  IconDelete,
  ListTitle,
  ListTitleText,
  ListTotal,
  ListTotalText,
} from "./styles";
import colors from "../../styles/colors";
import { formatPrice } from "../../util/format";

const List = ({ title, totalList, deleteList, editList }) => {
  return (
    <Container>
      <Content onPress={editList}>
        <ListTitle>
          <ListTitleText>{title}</ListTitleText>
        </ListTitle>

        <ListTotal>
          <ListTotalText>Total: {formatPrice(totalList)}</ListTotalText>
        </ListTotal>
      </Content>

      <IconDelete onPress={deleteList}>
        <Icon name="delete" size={20} color={colors.light} />
      </IconDelete>
    </Container>
  );
};

export default List;
