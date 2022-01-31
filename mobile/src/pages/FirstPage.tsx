import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;

export default function FirstPage() {
  const navigation = useNavigation();

  function handleNavigateToLoginPage() {
    navigation.navigate("LoginPage");
  }

  function handleNavigateRegistrationPage() {
    navigation.navigate("RegistrationPage");
  }

  function handleNavigateToGuestMapView() {
    navigation.navigate("MapScreen");
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewGuest}>
        <Text style={styles.textAnimal}>Bem-vindo(a)!</Text>

        <TouchableOpacity onPress={handleNavigateToGuestMapView}>
          <FontAwesome5 name="chevron-right" size={24} color="#3f3d56" />
        </TouchableOpacity>
      </View>

      <View style={styles.viewDescription}>
        <Text style={styles.textAnimalHelp}>Animal Help</Text>
        <Text style={styles.description}>
          Você gosta de animais? Ajude as ONGs e Protetores dos Animais. Estes
          sim são verdadeiros heróis dos nossos queridos amiguinhos!
        </Text>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={handleNavigateToLoginPage}
        >
          <Text style={styles.textButtonLogin}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={handleNavigateRegistrationPage}
        >
          <Text style={styles.textButtonSignUp}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginHorizontal: 24,
  },

  viewGuest: {
    marginTop: Constants.statusBarHeight + 24,
    marginBottom: windowHeight / 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textAnimal: {
    fontFamily: "Nunito_700Bold",
    fontSize: 24,
    color: "#00bfa6",
  },

  viewDescription: {
    position: "absolute",
    bottom: 32,
  },

  textAnimalHelp: {
    fontFamily: "Nunito_700Bold",
    fontSize: 32,
    color: "#00bfa6",

    marginBottom: 24,
  },

  description: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 18,
    color: "#3f3d56",

    marginBottom: 24,
  },

  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",

    height: 56,
    width: "100%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#3f3d56",

    marginBottom: 12,
  },

  textButtonLogin: {
    fontFamily: "Nunito_700Bold",
    fontSize: 24,
    color: "#3f3d56",
  },

  buttonSignUp: {
    alignItems: "center",
    justifyContent: "center",

    height: 56,
    width: "100%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#00bfa6",
    backgroundColor: "#00bfa6",

    marginBottom: 12,
  },

  textButtonSignUp: {
    fontFamily: "Nunito_700Bold",
    fontSize: 24,
    color: "#3f3d56",
  },
});
