import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import OnboardingTest from './pages/Onboarding/onboarding';

import FirstPage from "./pages/FirstPage";
import LoginPage from "./pages/CreateAccount/LoginPage";
import RegistrationPage from "./pages/CreateAccount/RegistrationPage";
import ForgotPasswordPage from "./pages/CreateAccount/ForgotPasswordPage";
import MapScreen from "./pages/MapScreen";
import ListOng from "./pages/ListOng";
import DetailOng from "./pages/DetailOng";
import RegistrationOng from "./pages/CreateAccount/RegistrationOng";
import OngDetails from './pages/OngDetails';

import Header from "./components/Header";

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        <Screen name="OnboardingTest" component={OnboardingTest} />

        <Screen name="FirstPage" component={FirstPage} />
        <Screen name="LoginPage" component={LoginPage} />
        <Screen name="RegistrationPage" component={RegistrationPage} />
        <Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />
        <Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: true,
            header: () => <Header title="Mapa ONGs" isMap={true} />,
          }}
        />
        <Screen name="ListOng" component={ListOng} />
        <Screen name="DetailOng" component={DetailOng} />
        <Screen name="RegistrationOng" component={RegistrationOng} />
        <Screen name="OngDetails" component={OngDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
