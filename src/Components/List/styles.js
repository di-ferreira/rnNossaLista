import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  flex-direction: row;
  padding: 5px 20px 10px 10px;
  border-style: solid;
  border-bottom-width: 2px;
  border-color: rgba(116, 185, 255, 0.4);
  width: 90%;
  max-width: 700px;
  align-items: center;
  justify-content: flex-start;
`;

export const Content = styled.TouchableOpacity`
  flex-direction: row;
  width: 60%;
`;

export const ListTitle = styled.View`
  width: 50%;
`;
export const ListTitleText = styled.Text``;

export const ListTotal = styled.View`
  padding-left: 10px;
`;

export const ListTotalText = styled.Text`
  font-weight: bold;
`;

export const IconDelete = styled.TouchableOpacity`
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: ${colors.redLine};
`;
