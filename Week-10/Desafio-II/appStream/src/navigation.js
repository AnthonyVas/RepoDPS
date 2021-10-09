import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import video from './screens/video';


import peliculas from '../src/screens/peliculas';
import series from '../src/screens/series';
import extrenos from '../src/screens/extrenos';

// console.log('LoginForm', Ionicons);
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function seriesStackScreen() {
  return (
    <Stack.Navigator

    >
      {/* <Stack.Screen name="home" component={hometabs} /> */}
      <Stack.Screen name="series" component={series}
        options={{
          title: 'Series', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }} />
      <Stack.Screen name="video" component={video} />
    </Stack.Navigator>

  );
}
function peliculasStackScreen() {
  return (
    <Stack.Navigator

    >
      {/* <Stack.Screen name="home" component={hometabs} /> */}
      <Stack.Screen name="peliculas" component={peliculas} options={{ title: 'Peliculas' }} />
      <Stack.Screen name="video" component={video} />
    </Stack.Navigator>

  );
}
function extrenosStackScreen() {
  return (
    <Stack.Navigator

    >
      {/* <Stack.Screen name="home" component={hometabs} /> */}
      <Stack.Screen name="extrenos" component={extrenos} options={{ title: 'Extrenos' }} />
      {/* <Stack.Screen name="video" component={video} /> */}
    </Stack.Navigator>

  );
}
export default function Navigation() {

  return (
    <Tab.Navigator
      // screenOptions={{ headerShown: false }}
      screenOptions={({ route }) => ({
        headerShown: false,
        showIcon: true,
        tabBarOptions: {
          style: {
            backgroundColor: '#0A193C',
          },
        },
        
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
        //   console.log(route.name);
        //   if (route.name === 'peliculas') {
        //     iconName = focused ? 'battery-dead-outline' : 'battery-dead-outline';
        //   } else if (route.name === 'series') {
        //     iconName = focused ? 'ios-desktop' : 'ios-desktop-outline';
        //   } else if (route.name === 'proximamente') {
        //     iconName = focused ? 'ios-timer' : 'ios-timer-outline';
        //   }
        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#2F4F4F',
        tabBarInactiveBackgroundColor: '#C0C0C0',
      })}
    >
      <Tab.Screen name="peliculas" component={peliculasStackScreen}
        options={{
          title: 'Peliculas',
          tabBarIcon: (tabInfo) => (
            <MaterialCommunityIcons name="home" size={18} color={tabInfo.tintColor} />
          ),
        }} />
      <Tab.Screen name="series" component={seriesStackScreen} options={{ title: 'Series' }} />
      <Tab.Screen name="extrenos" component={extrenosStackScreen} options={{ title: 'Extrenos' }} />

    </Tab.Navigator>

  );
}