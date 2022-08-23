import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import IntroSlider from './pages/Onboarding';

import FirstPage from "./pages/FirstPage";
import LoginPage from "./pages/CreateAccount/LoginPage";
import RegistrationPage from "./pages/CreateAccount/RegistrationPage";
import ForgotPasswordPage from "./pages/CreateAccount/ForgotPasswordPage";
import MapScreen from "./pages/MapScreen";
import ListOng from "./pages/ListOng";
import RegistrationOng from "./pages/CreateOng/RegistrationOng";
import OngDetails from './pages/OngDetails';

import SelectMapPosition from './pages/CreateOng/SelectMapPosition';

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

        <Screen name="IntroSlider" component={IntroSlider} />

        <Screen name="FirstPage" component={FirstPage} />
        <Screen name="LoginPage" component={LoginPage} />
        <Screen name="RegistrationPage" component={RegistrationPage} />
        <Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />
        <Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: true,
            header: () => <Header title="Mapa de ONG's" isMap={true} />,
          }}
        />
        <Screen name="ListOng" component={ListOng} 
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Lista de ONG's" isMap={false} />,
          }}
        />
        <Screen name="RegistrationOng" component={RegistrationOng} 
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" isMap={false} />,
          }}
        />
        <Screen name="OngDetails" component={OngDetails} 
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Conheça a ONG" isMap={false} />,
          }}
        />
        <Screen name="SelectMapPosition" component={SelectMapPosition} 
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" isMap={false} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
