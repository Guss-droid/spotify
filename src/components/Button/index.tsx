import React from 'react';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text, View, Image } from "react-native";

import { styles } from './styles';

type Props = RectButtonProps & {
  tittle?: string,
}

export function Button({ tittle, ...rest }: Props) {

  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image
          source={require('../../assets/smartphone.png')}
          style={styles.icon}
        />
      </View>
      <Text style={styles.tittle}>
        {tittle}
      </Text>
    </RectButton>
  )
}

export function ButtonGoogle({ tittle, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image
          source={require('../../assets/google.png')}
          style={styles.icon}
        />
      </View>
      <Text style={styles.tittle}>
        {tittle}
      </Text>
    </RectButton>
  )
}

export function ButtonFacebook({ tittle, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapperFacebook}>
        <Image
          source={require('../../assets/facebook.png')}
          style={styles.iconFacebook}
        />
      </View>
      <Text style={styles.tittle}>
        {tittle}
      </Text>
    </RectButton>
  )
}

export function ButtonFree({ tittle, ...rest }: Props) {
  return (
    <RectButton {...rest}>
      <Text style={styles.tittleFree}>
        {tittle}
      </Text>
    </RectButton>
  );
}