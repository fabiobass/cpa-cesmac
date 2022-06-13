import React, { useState } from "react";
import { Alert } from "react-native";
import TextInput from "../../components/TextInput";
import PrimaryButton from "../../components/PrimaryButton";
import { rateCoursePageRoute } from "../../core/routes/routesContants";

import { Container, Title, SizedBox } from "./styles";

const InitalRateDatailsPage = ({ route, navigation }) => {
  const [cityAndCampus, setCityAndCampus] = useState();
  const [course, setCourse] = useState();
  const [courseClass, setClass] = useState();
  const [startOfCourse, setStartOfCourse] = useState();
  const [subject, setSubject] = useState();

  const handleSubmit = () => {
    if (
      !cityAndCampus ||
      !course ||
      !courseClass ||
      !startOfCourse ||
      !subject
    ) {
      Alert.alert("Erro", "Por favor. Preencha todos os campos");
      return;
    }

    navigation.navigate(rateCoursePageRoute, {
      userId: route.params.userId,
      data: [
        {
          question: "Indique a cidade e o polo presencial em que você estuda",
          answer: cityAndCampus,
        },
        {
          question: "Qual seu curso?",
          answer: course,
        },
        {
          question: "Qual sua turma?",
          answer: courseClass,
        },
        {
          question: "Em qual ano/mês você iniciou o curso?",
          answer: startOfCourse,
        },
        {
          question:
            "Digite a disciplina para a qual você responderá o questionário",
          answer: subject,
        },
      ],
    });
  };

  return (
    <Container>
      <Title>Dados iniciais</Title>
      <TextInput
        placeholder="Cidade e Polo"
        label="Indique a cidade e o polo presencial em que você estuda"
        onChange={setCityAndCampus}
      />
      <TextInput
        placeholder="Curso"
        label="Qual seu curso?"
        onChange={setCourse}
      />
      <TextInput
        placeholder="Turma"
        label="Qual sua turma?"
        onChange={setClass}
      />
      <TextInput
        placeholder="Ano/Mês"
        label="Em qual ano/mês você iniciou o curso?"
        onChange={setStartOfCourse}
      />
      <TextInput
        placeholder="Disciplina"
        label="Digite a disciplina para a qual você responderá o questionário"
        onChange={setSubject}
      />
      <PrimaryButton buttonLabel="Proximo" onPress={handleSubmit} />
      <SizedBox />
    </Container>
  );
};

export default InitalRateDatailsPage;
