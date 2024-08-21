import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '@/components/navigation/BottomTabNavigator'; // Import your BottomTabNavigator component

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
