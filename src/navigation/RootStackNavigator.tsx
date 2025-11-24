import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash/SplashScreen';
import MainTabNavigator from './MainTabNavigator';
import EventDetailScreen from '../screens/eventDetail/EventDetailScreen';
import { HeaderTitle } from '../components/navigation/HeaderTitle';
import FavoriteScreen from '../screens/favorite/FavoriteScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      <Stack.Screen
        name="EventDetail"
        component={EventDetailScreen}
        options={{
          headerTitle: () => HeaderTitle('eventDetail.title'),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerTitle: () => HeaderTitle('favorite.title'),
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
export default RootStackNavigator;
