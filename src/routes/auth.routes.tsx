import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SingIn } from '../screens/SingIn';
import { theme } from '../global/styles/theme';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen
        name="SingIn"
        component={SingIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}