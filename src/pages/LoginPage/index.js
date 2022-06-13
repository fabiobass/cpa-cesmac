import React, { useState } from "react";
import { Alert, Text, View, StyleSheet, Button, Share } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../core/config/firebaseConfig";
import PrimaryButton from "../../components/PrimaryButton";
import TextInput from "../../components/TextInput";
import {
  signUpPageRoute,
  initialRateDatialsPageRoute,
} from "../../core/routes/routesContants";

import {
  Container,
  Title,
  PasswordInput,
  SignUpButton,
  SignUpButtonText,
  SignUpButton2,
  SignUpButtonText2
} from "./styles";
import { TouchableOpacity } from "react-native-web";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) =>
        navigation.navigate(initialRateDatialsPageRoute, {
          userId: value.user.uid,
        })
      )
      .catch((_) =>
        Alert.alert("Erro", "Erro na autenticação, tentar novamente")
      );
  };

  return (
    <Container>
      <Title>Tela de Login</Title>
      <TextInput placeholder="E-mail" onChange={setEmail} />
      <PasswordInput
        placeholder="Senha"
        onChangeText={setPassword}
        secureTextEntry
      />
      <PrimaryButton buttonLabel="Entrar" onPress={handleLogin} />

      <SignUpButton onPress={() => navigation.navigate(signUpPageRoute)}>
        <SignUpButtonText>Cadastrar-se</SignUpButtonText>
      </SignUpButton>

      <SignUpButton2 onPress={() => { Share.share({ message: 'Faça o questonário você também' }) }}>
        <SignUpButtonText>indique o App para os colegas de turma</SignUpButtonText>
      </SignUpButton2>

      <Text style={styles.text}>Suas informações não serão divulgadas</Text>

    </Container>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 18, fontWeight: 'bold', padding: 20, color: 'red' }
})

export default LoginPage;
