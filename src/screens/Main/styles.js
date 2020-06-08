import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Wraper = styled.View`
  background: ${colors.yellow};
  flex: 1;
  padding: 0 0 0 30px;
`;

export const Container = styled.View`
  flex: 1;
  border-style: solid;
  border-left-width: 2px;
  border-color: ${colors.redLine};
  justify-content: center;
  align-items: center;
`;

export const ListContainer = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 0px;
  padding-top: 10px;
  padding-bottom: 5px;
`;

export const IconContainer = styled.TouchableOpacity`
  background: ${colors.green};
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: colors.bluePen,
})`
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${colors.green};
  color: ${colors.bluePen};
  width: 100%;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0px 25px 20px 50px;
  margin-left: 5px;
`;
