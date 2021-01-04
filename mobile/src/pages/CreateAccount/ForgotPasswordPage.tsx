import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

export default function ForgotThePasswordPage() {
  const navigation = useNavigation();

  function handleNavigateToGoBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={handleNavigateToGoBack}
        >
          <FontAwesome5 name="chevron-left" size={24} color="#3f3d56" />
        </TouchableOpacity>
      </View>

      <View style={styles.viewMain}>
        <Text style={styles.text}>Desculpe isso ainda não está pronto.</Text>
        <Text style={styles.text}>Entre em contato por e-mail:</Text>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("mailto:contatoanimalhelp@example.com")
          }
        >
          <Text style={styles.textEmail}>contatoanimalhelp@email.com</Text>
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
  buttonBack: {
    marginTop: 12,
  },
  viewMain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontFamily: "Nunito_700Bold",
    fontSize: 18,
    color: "#3f3d56",
  },

  textEmail: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 20,
    color: "#00bfa6",

    marginTop: 12,
  },
});
