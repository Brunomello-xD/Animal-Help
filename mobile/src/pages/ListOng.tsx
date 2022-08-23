import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

import api from '../services/api';

type Ong = {
  id: number;
  name: string;
  opening_hours: string;
}

export default function ListOng() {
  const navigation = useNavigation();

  const [ongs, setOngs] = useState<Ong[]>([]);
  const [filteredOng, setFilteredOng] = useState<Ong[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    api.get('ongs').then(response => {
      setOngs(response.data)
    })
  }, [])

  useEffect(() => {
    setFilteredOng(ongs.filter(ong => ong.name.includes(search)))
  }, [search])

  function handleNavigateToDetailOng(id: number) {
    navigation.navigate("OngDetails", { id });
  }

  function handleNavigateSelectMapPosition() {
    navigation.navigate("SelectMapPosition");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textDescription}>
        Escolha umas das ONGs abaixo e ajude nossos heróis.
      </Text>

      <FlatList
        data={ongs}
        style={styles.flatListDetails}
        showsVerticalScrollIndicator={false}
        keyExtractor={(ongs) => String(ongs.id)}
        renderItem={({ item: ongs }) => (
          <View style={styles.viewFlatList}>
            <Text style={styles.textNameOng}>{ongs.name}</Text>

            <View style={styles.viewHourOperating}>
              <Text style={styles.textDescriptionHourOng}>
                Horário:
              </Text>
              <Text style={styles.textHour}>{ongs.opening_hours}</Text>
            </View>

            <TouchableOpacity
              style={styles.ButtonGoToOng}
              onPress={() => handleNavigateToDetailOng(ongs.id)}
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
          onPress={handleNavigateSelectMapPosition}
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

    //marginTop: 10,
  },

  input: {
    marginTop: 30,
    backgroundColor: "#fff",
    width: "100%",
    height: 36,
    borderRadius: 18,
    borderColor: "#15c3d6",
    borderWidth: 1,
    paddingHorizontal: 15

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
