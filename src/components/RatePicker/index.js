import React from "react";
import { Picker } from "@react-native-picker/picker";

import { Container, Label } from "./styles";

const RatePicker = ({ label, items, selectedValue, onValueChange }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Picker
        numberOfLines={10}
        selectedValue={selectedValue ?? -1}
        onValueChange={onValueChange}
      >
        <Picker.Item value={-1} label="Selecione uma opção" />
        {items.map((item, index) => (
          <Picker.Item key={index} value={index} label={item} />
        ))}
      </Picker>
    </Container>
  );
};

export default RatePicker;
