import React from "react";

import { Container, TextButton } from "./styles";

const PrimaryButton = ({ buttonLabel, onPress }) => {
  return (
    <Container onPress={onPress}>
      <TextButton>{buttonLabel}</TextButton>
    </Container>
  );
};

export default PrimaryButton;
