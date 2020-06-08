import React from "react";

import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, IconContainer, Logo } from "./styles";

function Header({ previous, navigation }) {
  return (
    <Container>
      {previous ? (
        <IconContainer onPress={() => navigation.goBack()}>
          <Icon name="keyboard-backspace" size={30} />
        </IconContainer>
      ) : null}
      <Logo />
    </Container>
  );
}

export default Header;
