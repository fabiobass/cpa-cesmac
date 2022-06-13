import React, { useState } from "react";
import { Alert } from "react-native";
import TextInput from "../../components/TextInput";
import PrimaryButton from "../../components/PrimaryButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../core/config/firebaseConfig";

import { Container, Title, PasswordInput } from "./styles";

const SignUpPage = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não são iguais");
    } else if (!password || !confirmPassword) {
      Alert.alert("Erro", "Favor preencher os campos de senhas");
    } else if (password.length < 6 || confirmPassword.length < 6) {
      Alert.alert("Erro", "As senhas devem ter no minimo 6 caracteres");
    } else if (!email) {
      Alert.alert("Erro", "Favor preencher o campo de e-mail");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((_) => {
          Alert.alert("Sucesso", "Cadastro criado com sucesso", [
            {
              text: "OK",
              onPress: (_) => {
                navigation.goBack();
              },
            },
          ]);
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(
            "Erro",
            "Não foi possivel concluir o seu cadastro. Tente novamente"
          );
        });
    }
  };

  return (
    <Container>
      <Title>Tela de Cadastro</Title>
      <TextInput placeholder="E-mail" onChange={setEmail} />
      <PasswordInput
        placeholder="Senha"
        onChangeText={setPassword}
        secureTextEntry
      />
      <PasswordInput
        placeholder="Confirmação da senha"
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <PrimaryButton buttonLabel="Cadastrar" onPress={handleSignUp} />
    </Container>
  );
};

export default SignUpPage;
