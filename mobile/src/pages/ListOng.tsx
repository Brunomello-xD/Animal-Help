import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function ListOng() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <FontAwesome5 name="chevron-left" size={24} color="#3f3d56" />
      </TouchableOpacity>

      <Text style={styles.textTitleOng}>ONGs parceiras</Text>

      <Text style={styles.textDescription}>
        Escolha umas das ONGs abaixo e ajude nossos heróis.
      </Text>

      <View>
        <FlatList
          data={[1, 2, 3, 4]}
          showsVerticalScrollIndicator={false}
          keyExtractor={(ongs) => String(ongs)}
          renderItem={() => (
            <View>
              <Text>Bruno</Text>
            </View>
          )}
        />
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

  textTitleOng: {
    fontFamily: "Nunito_700Bold",
    fontSize: 24,
    color: "#3f3d56",

    marginTop: 14,
  },

  textDescription: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 18,
    color: "#3f3d56",

    marginTop: 14,
  },
});
