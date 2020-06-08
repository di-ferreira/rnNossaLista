import styled from "styled-components/native";
import { darken } from "polished";
import colors from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background: ${colors.yellow};
`;

export const ListContainer = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: 10px;
  padding-bottom: 5px;
`;

export const TitleContainer = styled.View`
  padding: 20px 0;
  border-style: solid;
  border-bottom-width: 2px;
  border-color: rgba(116, 185, 255, 0.4);
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const NewItemContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const ItemName = styled.TextInput.attrs({
  placeholderTextColor: colors.dark,
})`
  width: 50%;
  height: 35px;
  padding-left: 10px;
  background: ${darken(0.1, colors.yellow)};
`;

export const ItemAmount = styled.TextInput.attrs({
  placeholderTextColor: colors.dark,
})`
  background: ${darken(0.1, colors.yellow)};
  padding-left: 10px;
  width: 20%;
  height: 35px;
`;

export const ItemPrice = styled.TextInput.attrs({
  placeholderTextColor: colors.dark,
})`
  background: ${darken(0.1, colors.yellow)};
  padding-left: 10px;
  width: 20%;
  height: 35px;
`;

export const SendButton = styled.TouchableOpacity`
  background: ${darken(0.1, colors.yellow)};
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 35px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding-left: 30px;
  border-style: solid;
  border-bottom-width: 2px;
  border-color: rgba(116, 185, 255, 0.4);
`;

export const LabelItem = styled.Text`
  width: 85px;
  padding: 10px;
  font-weight: bold;
  border-style: solid;
  border-left-width: 2px;
  border-color: rgba(255, 47, 46, 0.4);
`;

export const LabelQuantity = styled.Text`
  width: 50px;
  padding: 10px;
  font-weight: bold;
`;

export const LabelPrice = styled.Text`
  padding: 10px;
  font-weight: bold;
`;

export const ContainerTotalItems = styled.View`
  flex-direction: row;
  height: 30px;
  padding-left: 30px;
  border-style: solid;
  border-bottom-width: 2px;
  border-top-width: 2px;
  border-color: rgba(116, 185, 255, 0.4);
  align-items: baseline;
  justify-content: space-between;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding-top: 5px;
  padding-left: 10px;
  border-style: solid;
  border-left-width: 2px;
  border-color: ${colors.redLine};
`;

export const TotalNumber = styled.Text`
  font-size: 20px;
  margin-right: 20px;
`;

export const SaveButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 35px;
  justify-content: center;
  align-items: center;
  background: ${colors.green};
`;
export const SaveButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;
