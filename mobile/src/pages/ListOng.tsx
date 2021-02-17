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
import { useNavigation } from "@react-navigation/native";

export default function ListOng() {
  const navigation = useNavigation();

  function handleNavigateToGoBack() {
    navigation.goBack();
  }

  function handleNavigateToDetailOng() {
    navigation.navigate("DetailOng");
  }

  function handleNavigateToRegistrationOng() {
    navigation.navigate("RegistrationOng");
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <TouchableOpacity onPress={handleNavigateToGoBack}>
          <FontAwesome5 name="chevron-left" size={24} color="#3f3d56" />
        </TouchableOpacity>

        <Text style={styles.textTitleOng}>ONGs parceiras</Text>
      </View>

      <Text style={styles.textDescription}>
        Escolha umas das ONGs abaixo e ajude nossos heróis.
      </Text>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        style={styles.flatListDetails}
        showsVerticalScrollIndicator={false}
        keyExtractor={(ongs) => String(ongs)}
        renderItem={() => (
          <View style={styles.viewFlatList}>
            <Text style={styles.textNameOng}>Francisco de Assis</Text>

            <View style={styles.viewHourOperating}>
              <Text style={styles.textDescriptionHourOng}>
                Horário:
              </Text>
              <Text style={styles.textHour}>8 às 18 horas</Text>
            </View>

            <TouchableOpacity
              style={styles.ButtonGoToOng}
              onPress={handleNavigateToDetailOng}
            >
              <Text style={styles.textButtonGoToOng}>Ver mais detalhes</Text>
              <FontAwesome5 name="paw" size={16} color="#3f3d56" />
            </TouchableOpacity>
            
          </View>
        )}
      />

      <View style={styles.viewButtonCreateOng}>
        <TouchableOpacity
          style={styles.moreOng}
          onPress={handleNavigateToRegistrationOng}
        >
          <FontAwesome5 name="plus" size={20} color="#FFF" />
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

  viewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textTitleOng: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 24,
    color: "#3f3d56",
  },

  textDescription: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 18,
    color: "#3f3d56",

    marginTop: 18,
  },

  flatListDetails: {
    borderRadius: 12,
    backgroundColor: "#fff",

    padding: 6,
    marginTop: 30,
    marginBottom: 24,
  },

  viewFlatList: {
    borderRadius: 8,
    backgroundColor: "#f2f3f5",

    marginTop: 6,
    marginBottom: 2,
    padding: 4,
  },

  textNameOng: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 18,
    color: "#15c3d6",
  },

  viewHourOperating: {
    flexDirection: "row",
    alignItems: "center",
  },

  textDescriptionHourOng: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 16,
    color: "#3f3d56",
  },

  textHour: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 16,
    color: "#3f3d56",

    marginLeft: 4,
  },

  textButtonGoToOng: {
    fontFamily: "Nunito_700Bold",
    fontSize: 16,
    color: "#3f3d56",
  },

  ButtonGoToOng: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 6,
  },

  viewButtonCreateOng: {
    alignItems: "center",
  },

  moreOng: {
    backgroundColor: "#15c3d6",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 30,

    position: "absolute",
    bottom: 12,
  },
});
