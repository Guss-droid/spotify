import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, Image } from 'react-native';

import {
  Button,
  ButtonGoogle,
  ButtonFacebook,
  ButtonFree
} from '../../components/Button';

import { styles } from './styles';
import { BackGroundSingIn } from '../../components/Background';

export function SingIn() {

  const navigation = useNavigation()

  function handleHome() {
    navigation.navigate('Home')
  }

  return (
    <BackGroundSingIn>
      <View style={styles.container}>
        <Image source={require("../../assets/spotify.png")} style={styles.icon} />
        <Text style={styles.text}>Milhões de músicas à sua escolha.</Text>
        <Text style={styles.text}>Grátis no Spotify.</Text>
        <ButtonFree
          tittle='Inscreva-se grátis'
          style={styles.buttonFree}
          onPress={handleHome}
        />
        <Button
          tittle="Continuar com um número de telefone"
          style={styles.button}
          onPress={handleHome}
        />
        <ButtonGoogle
          tittle="Continuar com o Google"
          style={styles.button}
          onPress={handleHome}
        />
        <ButtonFacebook
          tittle="Continuar com o Facebook"
          style={styles.button}
          onPress={handleHome}
        />
        <View>
          <Text onPress={handleHome} style={styles.logIn}>Entrar</Text>
        </View>
      </View>
    </BackGroundSingIn>
  );
}