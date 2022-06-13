import React from "react";

import { Container, Input, Label } from "./styles";

const TextInput = ({ label, placeholder, onChange }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} onChangeText={onChange} />
    </Container>
  );
};

export default TextInput;
