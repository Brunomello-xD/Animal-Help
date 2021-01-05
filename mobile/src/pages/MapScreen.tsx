import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Constants from "expo-constants";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function MapScreen() {
  const pinColor = "#00bfa6";

  const [press, setPress] = useState(true);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -21.4683742,
          longitude: -47.0063995,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          onPress={(press) => setPress((press) => !press)}
          pinColor={pinColor}
          coordinate={{
            latitude: -21.467042,
            longitude: -47.0071137,
          }}
        />
        {!press ? (
          <View style={styles.container}>
            <Text>Bruno!</Text>
          </View>
        ) : null}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  nextButton: {
    backgroundColor: "#15c3d6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,

    position: "absolute",
    left: 24,
    right: 24,
    bottom: 40,
  },
});
