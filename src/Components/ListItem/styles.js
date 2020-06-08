import styled from "styled-components/native";
import { darken, lighten } from "polished";
import colors from "../../styles/colors";

export const Container = styled.View`
  flex-direction: row;
  border-style: solid;
  border-bottom-width: 2px;
  border-color: rgba(116, 185, 255, 0.4);
`;

export const RedLine = styled.View`
  padding: 25px 15px;
  border-style: solid;
  border-right-width: 2px;
  border-color: rgba(255, 47, 46, 0.4);
`;

export const ItemContent = styled.View`
  flex-direction: row;
  flex: 1;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 15px;
  align-items: center;
  justify-content: center;
`;

export const LineTrace = styled.View`
  border-top-width: ${(props) => (props.purchased ? "1px" : "0")};
  border-style: solid;
  border-top-color: #000;
  width: 100%;
  height: 2px;
  position: absolute;
  z-index: 1000;
`;

export const Content = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
`;

export const ItemTitleText = styled.Text``;

export const ItemQuantityText = styled.Text`
  text-align: center;
`;

export const ItemPriceText = styled.Text``;

export const ItemTitle = styled.View`
  width: 80px;
  justify-content: center;
  align-items: center;
`;

export const ItemQuantity = styled.View`
  padding: 0 5px;
  justify-content: center;
  align-items: center;
  width: 35px;
`;

export const ItemPrice = styled.View`
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  width: 70px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
`;

export const IconDelete = styled.TouchableOpacity`
  margin-left: 15px;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: ${colors.redLine};
`;

export const IconEdit = styled.TouchableOpacity`
  margin-left: 15px;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: ${colors.green};
`;
