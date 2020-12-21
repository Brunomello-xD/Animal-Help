import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import FirstPage from "./pages/FirstPage";

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="FirstPage" component={FirstPage} />
      </Navigator>
    </NavigationContainer>
  );
}
