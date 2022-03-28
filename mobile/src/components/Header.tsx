import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  isMap?: boolean;
  showCancel?: boolean;
}

export default function HeaderMap({ title, isMap, showCancel = true }: HeaderProps) {
  const navigation = useNavigation();

  function handleNavigateToListOng() {
    navigation.navigate("ListOng");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonAction} onPress={navigation.goBack}>
        <Feather name="chevron-left" size={24} color="#3f3d56" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {isMap ? (
        <TouchableOpacity style={styles.buttonAction} onPress={handleNavigateToListOng}>
          <Feather name="more-horizontal" size={24} color="#3f3d56" />
        </TouchableOpacity>
      ) : showCancel ? (
        <TouchableOpacity style={styles.buttonActionRed} onPress={navigation.goBack}>
          <Feather name="x" size={24} color="#FF669D" />
        </TouchableOpacity>
      ) :(
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: "#f9fafc",
    borderBottomWidth: 1,
    borderColor: "#dde3f0",
    paddingTop: 18,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "Nunito_600SemiBold",
    color: "#3f3d56",
    fontSize: 18,
  },
  buttonAction: {
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 0.8,
    borderColor: '#dde3f0',
    borderRadius: 8,
    height: 40,
    width: 40
  },
  buttonActionRed: {
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 0.8,
    borderColor: '#dbc4cc',
    borderRadius: 8,
    height: 40,
    width: 40
  }
});
