import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import { useColorScheme } from 'react-native';
import { AppDarkTheme, AppLightTheme } from '../common/constants/theme';

const AppNavigator = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      theme={scheme === 'dark' ? AppDarkTheme : AppLightTheme}
    >
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
