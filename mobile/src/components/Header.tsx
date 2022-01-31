import React from "react";
import { View, StyleSheet, Text } from "react-native";
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
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="chevron-left" size={24} color="#3f3d56" />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {isMap ? (
        <BorderlessButton onPress={handleNavigateToListOng}>
          <Feather name="more-horizontal" size={24} color="#3f3d56" />
        </BorderlessButton>
      ) : showCancel ? (
        <BorderlessButton onPress={navigation.goBack}>
          <Feather name="x" size={24} color="#FF669D" />
        </BorderlessButton>
      ) :(
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    backgroundColor: "#f9fafc",
    borderBottomWidth: 1,
    borderColor: "#dde3f0",
    paddingTop: 22,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerList: {
    padding: 22,
    borderBottomWidth: 1,
    borderColor: "#dde3f0",
    paddingTop: 22,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
  ,

  title: {
    fontFamily: "Nunito_600SemiBold",
    color: "#3f3d56",
    fontSize: 18,
  },
});
