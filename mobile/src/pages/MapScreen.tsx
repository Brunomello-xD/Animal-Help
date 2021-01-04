import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import MapView from "react-native-maps";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: Constants.statusBarHeight + 12,
  },
});
