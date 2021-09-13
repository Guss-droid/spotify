import React from 'react';

import {
  View,
  ViewProps,
  Text,
  Image,
  ImageProps
} from 'react-native';

import { styles } from './styles';

type IAlbumProps = ViewProps & ImageProps & {
  name: string,
  photoAlbum: ImageProps
}

export function AlbumList({ name, photoAlbum, ...rest }: IAlbumProps) {
  return (
    <View style={styles.container} {...rest}>
      <Image style={styles.face} source={photoAlbum} />
      <Text style={styles.author}>
        {name}
      </Text>
    </View>
  );
}