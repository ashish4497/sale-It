import React from 'react';
import BottomTabNavigator from '@/components/navigation/BottomTabNavigator';
import HeaderPage from '@/components/Header/Header';

export default function TabLayout() {
  return (
   <>
    <HeaderPage />
    <BottomTabNavigator/>
   </>
  );
}
