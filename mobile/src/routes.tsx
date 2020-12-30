import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import FirstPage from "./pages/FirstPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="FirstPage" component={FirstPage} />
        <Screen name="LoginPage" component={LoginPage} />
        <Screen name="RegistrationPage" component={RegistrationPage} />
        <Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />
      </Navigator>
    </NavigationContainer>
  );
}
