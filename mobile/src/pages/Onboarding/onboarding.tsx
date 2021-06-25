import { Image, StyleSheet } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from "@react-navigation/native";

export default function OnboardingTest() {
  const navigation = useNavigation();

  function handleNavigateToFirstPage() {
    navigation.navigate("FirstPage");
  }
  return (
    <Onboarding
      onDone={handleNavigateToFirstPage}
      pages={[
        {
          backgroundColor: '#f2f4f5',
          image: <Image source={require('./images/superhero.png')} />,
          title: 'Leve\nfelicidade\npara o\nmundo',
          titleStyles: {
            textAlign: 'left',
            fontFamily: "Nunito_800ExtraBold",
            fontSize: 40,
            color: "#3f3d56"
          },
          subtitle: 'Adote e salve uma vida ou ajuda nossas ONGs parceiras',
          subTitleStyles: {
            textAlign: 'left',
            fontFamily: "Nunito_700Bold",
            fontSize: 22,
            color: "#3f3d56"
          }
        },
        {
          backgroundColor: '#f2f4f5',
          image: <Image source={require('./images/superhero.png')} />,
          title: 'The Title',
          subtitle: 'This is the subtitle that sumplements the title.',
        },
        {
          backgroundColor: '#f2f4f5',
          image: <Image source={require('./images/superhero.png')} />,
          title: 'Triangle',
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  )
}