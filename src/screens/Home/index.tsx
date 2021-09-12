import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { BackGroundHome } from '../../components/Background';

import { styles } from './styles';

export function Home() {
  return (
    <BackGroundHome>
      <View style={styles.container}>
        <Text style={styles.tittle}>Experimente algo d...</Text>
      </View>
    </BackGroundHome>
  );
}