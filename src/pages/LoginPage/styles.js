import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const PasswordInput = styled.TextInput`
  width: 100%;
  padding: 8px 16px;
  border: 0.5px solid #000000;
  border-radius: 6px;
  margin-bottom: 16px;
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 20px;
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #0277BC
`;

export const SignUpButtonText = styled.Text`
  
  font-weight: bold;
  color: #eeeeee
`;

export const SignUpButton2 = styled.TouchableOpacity`
  margin-top: 20px;
  width: 90%;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #2F4F4F
`;
