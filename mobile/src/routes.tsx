import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import FirstPage from "./pages/FirstPage";
import LoginPage from "./pages/CreateAccount/LoginPage";
import RegistrationPage from "./pages/CreateAccount/RegistrationPage";
import ForgotPasswordPage from "./pages/CreateAccount/ForgotPasswordPage";
import MapScreen from "./pages/MapScreen";

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
        <Screen name="FirstPage" component={FirstPage} />
        <Screen name="LoginPage" component={LoginPage} />
        <Screen name="RegistrationPage" component={RegistrationPage} />
        <Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />
        <Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Mapa ONGs" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
