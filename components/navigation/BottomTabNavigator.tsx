import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '@/screens/Home';
import ProfileScreen from '@/screens/Profile';
import Login from '@/screens/LoginScreen';
import SignUp from '@/screens/SignUpScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
              case 'User':
                iconName = 'person';
                break;
            default:
              iconName = 'help';
              break;
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Login" component={Login}  options={{ headerShown:false }} />
      {/* <Tab.Screen name="SignUp" component={SignUp}  options={{ headerShown:false }} /> */}
      <Tab.Screen name="Home" component={HomeScreen}  options={{ headerShown:false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown:false }}/>
      <Tab.Screen name="User" component={ProfileScreen} options={{ headerShown:false }} />
      <Tab.Screen name="Settings" component={ProfileScreen} options={{ headerShown:false }} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;


