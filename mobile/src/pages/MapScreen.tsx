import React from "react";
import { View, StyleSheet, Dimensions, Text, StatusBar } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import mapMarker from "../images/map-marker.png";

export default function MapScreen() {
  const navigation = useNavigation();

  function handleNavigateToRegistrationOng() {
    navigation.navigate("RegistrationOng");
  }

  function handleNavigateToDetailOng() {
    navigation.navigate("OngDetails");
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
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
          icon={mapMarker}
          coordinate={{
            latitude: -21.467042,
            longitude: -47.0071137,
          }}
        >
          <Callout 
            tooltip 
            onPress={handleNavigateToDetailOng}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Francisco de Assis</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.viewButtonCreateOng}>
        <RectButton
          style={styles.moreOng}
          onPress={handleNavigateToRegistrationOng}
        >
          <FontAwesome5 name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  calloutText: {
    color: "#3f3d56",
    fontSize: 14,
    fontFamily: "Nunito_700Bold",
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
    bottom: 100,
  },
});
