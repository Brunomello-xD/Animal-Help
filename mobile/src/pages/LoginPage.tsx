import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Input } from "react-native-elements";

export default function LoginPage() {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  function handleNavigateToGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewWelcomeBack}>
        <TouchableOpacity
          style={styles.buttonGoBack}
          onPress={handleNavigateToGoBack}
        >
          <FontAwesome5 name="chevron-left" size={24} color="#3f3d56" />
        </TouchableOpacity>

        <Text style={styles.welcomeBack}>Bem-vindo(a)</Text>
        <Text style={styles.welcomeBack}>de volta!</Text>
      </View>

      <View style={styles.viewInput}>
        <Input
          style={styles.input}
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
          placeholder=" Password"
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

        <View style={styles.viewForgotThePassword}>
          <TouchableOpacity>
            <Text style={styles.forgotThePassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.viewOr}>
          <Text style={styles.textOr}>or</Text>
        </View>

        <TouchableOpacity style={styles.buttonSignUp}>
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
    marginTop: Constants.statusBarHeight + 12,
  },

  viewWelcomeBack: {
    height: "40%",
  },

  buttonGoBack: {
    marginBottom: "25%",
  },

  welcomeBack: {
    fontFamily: "Nunito_700Bold",
    fontSize: 32,
    color: "#00bfa6",
  },

  viewInput: {
    flexDirection: "column",
    justifyContent: "flex-end",
    bottom: 12,
  },

  input: {
    width: "100%",
  },

  viewForgotThePassword: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",

    marginBottom: 8,
  },

  forgotThePassword: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 18,
    color: "#00bfa6",
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
