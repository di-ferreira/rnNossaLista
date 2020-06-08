import styled from "styled-components/native";
import { darken, lighten } from "polished";
import colors from "../../styles/colors";

import logo from "../../assets/logo.png";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 20px 10px 20px;
  height: 60px;
  background: ${colors.yellow};
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: flex-start;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-right: -25px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: "contain",
})`
  flex: 1;
  align-self: center;
  width: 200px;
  height: 50px;
`;
