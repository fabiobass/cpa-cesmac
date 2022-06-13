import styled from "styled-components/native";
import { primaryColor, lightColor } from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${primaryColor};
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: ${lightColor};
`;
