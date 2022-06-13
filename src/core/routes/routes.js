import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  loginPageRoute,
  signUpPageRoute,
  initialRateDatialsPageRoute,
  rateCoursePageRoute,
} from "./routesContants";
import LoginPage from "../../pages/LoginPage";
import SignUpPage from "../../pages/SignUpPage";
import InitalRateDatailsPage from "../../pages/InitalRateDatailsPage";
import RateCoursePage from "../../pages/RateCoursePage";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={loginPageRoute}
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={signUpPageRoute}
          component={SignUpPage}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name={initialRateDatialsPageRoute}
          component={InitalRateDatailsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={rateCoursePageRoute}
          component={RateCoursePage}
          options={{ title: "Avaliação" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
