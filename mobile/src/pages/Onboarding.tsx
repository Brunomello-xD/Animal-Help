import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

const slides = [
  {
    key: '1',
    text: 'Conheça nossas ONGs\ne protetores parceiros.',
    title: 'Leve\nfelicidade para\no mundo',
    image: require('../images/world.png'),
    backgroundColor: '#f2f4f5',
  },
  {
    key: '2',
    title: 'Super-heroína',
    text: 'Adote um anjo e salve\numa vida, seja uma super-heroína',
    image: require('../images/superwoman.png'),
    backgroundColor: '#f2f4f5',
  },
  {
    key: '3',
    title: 'Super-herói',
    text: '... ou um super-herói!\nFaça a diferença para \neles, ame e seja amado.',
    image: require('../images/superhero.png'),
    backgroundColor: '#f2f4f5',
  },
];

const OnboardingPage = () => {
  const navigation = useNavigation();

  function handleNavigateToFirstPage() {
    navigation.navigate("FirstPage");
  }

  function stylesButtonNext() {
    return (
      <Ionicons
        name="chevron-forward-outline"
        color="#3f3d56"
        size={30}
      />
    );
  };

  function stylesButtonDone() {
    return (
      <Ionicons 
        name="checkmark-done-outline" 
        color="#3f3d56" 
        size={30} />
    );
  };

  const RenderItem = ({ item }: { item: any }) => {
    return (
        <View
          style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingBottom: 100,
            paddingHorizontal: 12,
            marginTop: Constants.statusBarHeight + 24,
          }}>
          <Text style={styles.introTitleStyle}>
            {item.title}
          </Text>
          <Image
            source={item.image} />
          <Text style={styles.introTextStyle}>
            {item.text}
          </Text>
        </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={handleNavigateToFirstPage}
        showSkipButton={false}

        dotStyle={{
          width: 20,
          height: 5,
          borderRadius: 10,
          marginHorizontal: 8,
          backgroundColor: "rgba(rgba(0, 191, 166, 1))",
        }}

        activeDotStyle={{
          width: 20,
          height: 10,
          borderRadius: 10,
          marginHorizontal: 8,
          backgroundColor: "rgba(rgba(63, 61, 86, 1))",
        }}

        renderNextButton={stylesButtonNext}
        renderDoneButton={stylesButtonDone}
        renderSkipButton={stylesButtonDone}
      />
    </>
  );
};

export default OnboardingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  introTextStyle: {
    fontSize: 28,
    color: '#3f3d56',
    textAlign: 'left',
    paddingVertical: 32,
    fontFamily: "Nunito_600SemiBold"
  },
  introTitleStyle: {
    fontSize: 42,
    color: '#3f3d56',
    textAlign: 'left',
    marginBottom: 16,
    marginHorizontal: 12,
    fontFamily: "Nunito_800ExtraBold",
  },
});