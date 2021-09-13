import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  View,
  ViewProps,
  Text,
  Image,
  ImageProps
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler'
import { PlayMusic } from '../../screens/PlayMusic';

import { styles } from './styles';

type IAlbumProps = ViewProps & ImageProps & {
  name: string,
  photoAlbum: ImageProps
}

const { Screen } = createStackNavigator()

export function AlbumList({ name, photoAlbum, ...rest }: IAlbumProps) {

  function handleClick() {
    return (
      <Screen
        name="playMusic"
        component={PlayMusic}
      />
    )
  }

  return (
    <View style={styles.container} {...rest}>
      <RectButton onPress={handleClick} >
        <Image style={styles.face} source={photoAlbum} />
        <Text style={styles.author}>
          {name}
        </Text>
      </RectButton>
    </View>
  );
}