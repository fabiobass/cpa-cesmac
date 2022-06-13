import React, { useState } from "react";
import { Alert } from "react-native";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../core/config/firebaseConfig";
import RatePicker from "../../components/RatePicker";
import PrimaryButton from "../../components/PrimaryButton";
import { loginPageRoute } from "../../core/routes/routesContants";

import { Container, Title, SizedBox } from "./styles";

const RateCoursePage = ({ route, navigation }) => {
  const [answerQuestionOne, setAnswerQuestionOne] = useState(-1);
  const [answerQuestionTwo, setAnswerQuestionTwo] = useState(-1);
  const [answerQuestionThree, setAnswerQuestionThree] = useState(-1);
  const [answerQuestionFour, setAnswerQuestionFour] = useState(-1);
  const [answerQuestionFive, setAnswerQuestionFive] = useState(-1);
  const [answerQuestionSix, setAnswerQuestionSix] = useState(-1);
  const [answerQuestionSeven, setAnswerQuestionSeven] = useState(-1);

  const questionOne = {
    questionSentence: "1. Avalie sua atuação pessoal durante a disciplina:",
    options: [
      "a. Estive motivado durante o decorrer de toda a disciplina",
      "b. Além das referências essenciais indicadas, tive a oportunidade de explorar as demais referências sugeridas",
      "c. Consegui me organizar para o estudo, conciliando os trabalhos com as atividades pessoais e profissionais",
      "d. Participei efetivamente das atividades individuais propostas (tarefas)",
      "e. Explorei o potencial interativo do AVA, compartilhando e debatendo com o(a) professor(a) e demais colegas",
      "f. As opiniões de colegas e do(a) professor(a) contribuíram para o meu processo de aprendizagem",
      "g. As discussões e debates realizados no AVA foram importantes para minha tomada de posição frente aos temas",
      "h. Dentro das minhas condições práticas e de organização, os prazos para a realização das atividades foram suficientes",
      "i. Sinto-me motivado(a) a aplicar os conhecimentos obtidos nesta disciplina do curso",
    ],
  };
  const questionTwo = {
    questionSentence: "2. Avalie os conteúdos abordados nesta disciplina:",
    options: [
      "a. Foram pertinentes e atualizados. Por meio deles pude ter uma boa visão sobre os assuntos ligados à disciplina",
      "b. A linguagem utilizada foi acessível e por meio do tom empregado estabeleci uma empatia com os conteúdos",
      "c. Os conceitos apresentados foram suficientes para a realização das atividades propostas colaborativamente",
      "d. Os hiperlinks foram pertinentes, possibilitando-me novas referências sobre o assunto",
      "e. As referências complementares permitiram aprofundamento dos conceitos que mais me interessaram",
    ],
  };
  const questionThree = {
    questionSentence: "3. Avalie o material instrucional desta disciplina:",
    options: [
      "a. O material disponibilizado foi suficiente para a aprendizagem do conteúdo",
      "b. As leituras complementares e dicas do(a) professor(a) enriqueceram meu aprendizado",
      "c. As referências bibliográficas do material foram significativas para meu aprendizado",
      "d. Os textos eram adequados ao tempo previsto para a sua leitura",
      "e. A linguagem utilizada no material foi condizente com meu grau de formação",
    ],
  };
  const questionFour = {
    questionSentence:
      "4. Avalie as Experiências de Aprendizagem desta disciplina:",
    options: [
      "a. Ocorreram de forma eficaz em virtude da utilização das ferramentas propostas",
      "b. Provocaram e incentivaram a reflexão sobre os temas tratados",
      "c. Incentivaram a colaboração",
      "d. Ofereceram oportunidade de reflexão sobre a futura aplicação dos conceitos e fundamentos teóricos discutidos",
      "e. Foram condizentes com a carga horária prevista de estudo a distância",
      "f. O feedback oferecido pelo(a) professor(a) em minhas atividades foi adequado, suficiente e contribuiu para a compreensão dos conteúdos que estudei",
    ],
  };
  const questionFive = {
    questionSentence: "5. Avalie a aprendizagem nesta disciplina:",
    options: [
      "a. Consegui estabelecer um vínculo com o(a) professor(a) e tutor(a)",
      "b. O(a) professor(a) esteve disposto(a) a esclarecer as minhas dúvidas",
      "c. O(a) tutor(a) esteve disposto(a) a esclarecer as minhas dúvidas",
      "d. As orientações dadas pelo(a) professor(a) para a realização das atividades e trabalhos foram adequadas e suficientes",
      "e. Apesar da distância física, pude perceber a presença de pessoas acompanhando meu trabalho e dispostas a me ajudar quando necessário",
      "f. O(A) professor(a) manteve um relacionamento amigável com o grupo, tentando constantemente estimular a participação do grupo e de cada um",
      "g. O(A) tutor(a) manteve um relacionamento amigável com o grupo, tentando constantemente estimular a participação do grupo e de cada um",
      "h. A metodologia de trabalho colaborativo utilizada pelo(a) professor(a) contribuiu para a compreensão dos conceitos discutidos",
      "i. Os critérios de avaliação estabelecidos pelo(a) professor(a) foram claros e bem definidos",
      "j. A participação do(a) professor(a) nos debates e discussões no Ambiente Virtual foi essencial para que estas interações tivessem um bom resultado",
      "k. A participação do(a) tutor(a) nos debates e discussões no Ambiente Virtual foi essencial para que estas interações tivessem um bom resultado",
      "l. Os feedbacks das atividades foram feitos em tempo adequado pelo(a) professor(a)",
    ],
  };
  const questionSix = {
    questionSentence:
      "6. Avalie as aulas on-line (webconferences) desta disciplina:",
    options: [
      "a. As webconferences tiveram uma linguagem clara e acessível",
      "b. As webconferences contribuíram para meu entendimento sobre as aplicações práticas dos conteúdos abordados",
      "c. As webconferences tiveram uma duração adequada",
      "d. As webconferences abordaram exemplos pertinentes e enriquecedores para os conteúdos estudados",
      "e. As webconferences tiveram boa qualidade técnica e foram agradáveis de assistir",
    ],
  };
  const questionSeven = {
    questionSentence: "7. Avalie as obras indicadas nesta disciplina:",
    options: [
      "a. O acervo de obras disponível na Biblioteca Virtual são adequadamente abrangentes em relação às necessidades da disciplina",
      "b. O acervo de obras disponível na Biblioteca Virtual são adequadamente atualizados em relação às necessidades da disciplina",
    ],
  };

  const handleSubmit = async () => {
    if (answerQuestionOne < 0) {
      Alert.alert("Erro", "Selecione uma opção valida na questão número 1");
    } else if (answerQuestionTwo < 0) {
      Alert.alert("Erro", "Selecione uma opção valida na questão número 2");
    } else if (answerQuestionThree < 0) {
      Alert.alert("Erro", "Selecione uma opção valida na questão número 3");
    } else if (answerQuestionFour < 0) {
      Alert.alert("Erro", "Selecione uma opção valida na questão número 4");
    } else if (answerQuestionFive < 0) {
      Alert.alert("Erro", "Selecione uma opção valida na questão número 5");
    } else if (answerQuestionSix < 0) {
      Alert.alert("Erro", "Selecione uma opção valida na questão número 6");
    } else if (answerQuestionSeven < 0) {
      Alert.alert("Erro", "Selecione uma opção valida na questão número 7");
    } else {
      const rateAnswers = [
        {
          question: questionOne.questionSentence,
          answer: questionOne.options[answerQuestionOne],
        },
        {
          question: questionTwo.questionSentence,
          answer: questionTwo.options[answerQuestionTwo],
        },
        {
          question: questionThree.questionSentence,
          answer: questionThree.options[answerQuestionThree],
        },
        {
          question: questionFour.questionSentence,
          answer: questionFour.options[answerQuestionFour],
        },
        {
          question: questionFive.questionSentence,
          answer: questionFive.options[answerQuestionFive],
        },
        {
          question: questionSix.questionSentence,
          answer: questionSix.options[answerQuestionSix],
        },
        {
          question: questionSeven.questionSentence,
          answer: questionSeven.options[answerQuestionSeven],
        },
      ];

      const { data, userId } = route.params;
      const document = new Date().getTime();

      try {
        await setDoc(doc(db, "rates", `${document}`), {
          userId: userId,
          rateDatails: data,
          rateAnswers: rateAnswers,
        });

        Alert.alert("Sucesso", "Avaliação entregue com sucesso");
        navigation.navigate(loginPageRoute);
      } catch (error) {
        console.log(error);
        Alert.alert("Erro", "Erro ao enviar a avaliação. Tente novamente");
      }
    }
  };

  return (
    <Container>
      <Title>Avalie a disciplina</Title>
      <RatePicker
        label={questionOne.questionSentence}
        selectedValue={answerQuestionOne}
        onValueChange={setAnswerQuestionOne}
        items={questionOne.options}
      />
      <RatePicker
        label={questionTwo.questionSentence}
        selectedValue={answerQuestionTwo}
        onValueChange={setAnswerQuestionTwo}
        items={questionTwo.options}
      />
      <RatePicker
        label={questionThree.questionSentence}
        selectedValue={answerQuestionThree}
        onValueChange={setAnswerQuestionThree}
        items={questionThree.options}
      />
      <RatePicker
        label={questionFour.questionSentence}
        selectedValue={answerQuestionFour}
        onValueChange={setAnswerQuestionFour}
        items={questionFour.options}
      />
      <RatePicker
        label={questionFive.questionSentence}
        selectedValue={answerQuestionFive}
        onValueChange={setAnswerQuestionFive}
        items={questionFive.options}
      />
      <RatePicker
        label={questionSix.questionSentence}
        selectedValue={answerQuestionSix}
        onValueChange={setAnswerQuestionSix}
        items={questionSix.options}
      />
      <RatePicker
        label={questionSeven.questionSentence}
        selectedValue={answerQuestionSeven}
        onValueChange={setAnswerQuestionSeven}
        items={questionSeven.options}
      />
      <PrimaryButton buttonLabel="Enviar avaliação" onPress={handleSubmit} />
      <SizedBox />
    </Container>
  );
};

export default RateCoursePage;
