import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Input } from "react-native-elements";

const windowHeight = Dimensions.get("window").height;

export default function RegistrationPage() {
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigation = useNavigation();

  function handleNavigateToFistPage() {
    navigation.navigate("FirstPage");
  }

  function handleNavigateToLoginPage() {
    navigation.navigate("LoginPage");
  }

  function clickOnRegister() {
    if (name === "") {
      alert("Prencha o campo Nome")
    }

    if (email === "") {
      alert("Prencha o campo E-mail")
    }

    if (password !== passwordRepeat) {
      alert("Senhas erradas")
    }

  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
    >
      <View style={styles.viewMain}>
        <TouchableOpacity
          style={styles.buttonGoBack}
          onPress={handleNavigateToFistPage}
        >
          <FontAwesome5 name="chevron-left" size={24} color="#3f3d56" />
        </TouchableOpacity>

        <Text style={styles.welcome}>Criação de</Text>
        <Text style={styles.welcomeBack}>Conta!</Text>

        <Input
          style={styles.input}
          onChangeText={(name) => setName(name)}
          placeholder=" Nome"
          multiline={false}
          leftIcon={<FontAwesome5 name="user" size={18} color="#3f3d56" />}
        />

        <Input
          style={styles.input}
          onChangeText={(email) => setEmail(email)}
          placeholder=" E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          multiline={false}
          leftIcon={<FontAwesome5 name="envelope" size={18} color="#3f3d56" />}
        />

        <Input
          style={styles.input}
          onChangeText={(password) => setPassword(password)}
          placeholder=" Senha"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={visible ? false : true}
          multiline={false}
          leftIcon={<Feather name="lock" size={18} color="#3f3d56" />}
          rightIcon={
            <TouchableOpacity onPress={() => setVisible((visible) => !visible)}>
              <FontAwesome5
                name={visible ? "eye" : "eye-slash"}
                size={18}
                color="#3f3d56"
              />
            </TouchableOpacity>
          }
        />

        <Input
          style={styles.input}
          onChangeText={(passwordRepeat) => setPasswordRepeat(passwordRepeat)}
          placeholder=" Repita a senha"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={visible ? false : true}
          multiline={false}
          leftIcon={<Feather name="lock" size={18} color="#3f3d56" />}
        />

        <TouchableOpacity style={styles.buttonSignUp} onPress={clickOnRegister}>
          <Text style={styles.textButtonSignUp}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.viewOr}>
          <Text style={styles.textOr}>ou</Text>
        </View>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={handleNavigateToLoginPage}
        >
          <Text style={styles.textButtonLogin}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewMain: {
    maxHeight: windowHeight,
    marginTop: Constants.statusBarHeight,
  },

  buttonGoBack: {
    marginBottom: windowHeight / 10,
  },

  welcome: {
    fontFamily: "Nunito_700Bold",
    fontSize: 32,
    color: "#00bfa6",
  },

  welcomeBack: {
    fontFamily: "Nunito_700Bold",
    fontSize: 32,
    color: "#00bfa6",

    marginBottom: 52,
  },

  input: {
    width: "100%",
  },

  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",

    height: 56,
    width: "100%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#3f3d56",

    marginBottom: 2,
  },

  textButtonLogin: {
    fontFamily: "Nunito_700Bold",
    fontSize: 24,
    color: "#3f3d56",
  },

  viewOr: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textOr: {
    fontFamily: "Nunito_400Regular",
    fontSize: 20,
    color: "#3f3d56",

    marginBottom: 2,
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
  },

  textButtonSignUp: {
    fontFamily: "Nunito_700Bold",
    fontSize: 24,
    color: "#3f3d56",
  },
});
