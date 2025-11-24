import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { HeaderTitle } from '../components/navigation/HeaderTitle';
import { TabBarIcon } from '../components/navigation/TabBarIcon';
import { TabBarLabel } from '../components/navigation/TabbarLabel';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
    // screenOptions={{
    //   tabBarActiveTintColor: 'red',
    //   tabBarInactiveTintColor: 'grey',
    // }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => HeaderTitle('home.title'),
          tabBarIcon: ({ focused, color, size }) =>
            TabBarIcon('home-fill', 'home', focused, color, size),
          tabBarLabel: ({ color }) => TabBarLabel('common.home', color),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: () => HeaderTitle('profile.title'),
          tabBarIcon: ({ focused, color, size }) =>
            TabBarIcon('person-fill', 'person', focused, color, size),
          tabBarLabel: ({ color }) => TabBarLabel('common.profile', color),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
