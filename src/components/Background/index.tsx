import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from './styles';
import { theme } from "../../global/styles/theme";

type Props = {
  children: ReactNode
}

export function BackGroundHome({ children }: Props) {

  const { secondary100, cyanHome90 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[cyanHome90, secondary100]}
    >
      {children}
    </LinearGradient>
  )
}

export function BackGroundSingIn({ children }: Props) {

  const { secondary100, white40, secondary30 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[white40, secondary30  ,secondary100]}
    >
      {children}
    </LinearGradient>
  )
}