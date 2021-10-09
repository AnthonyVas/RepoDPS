import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import video from './src/screens/video';
const Stack = createNativeStackNavigator();

import Navigation from './src/navigation';
export default function App() {

  return (


    <NavigationContainer >
      {/* <Stack.Navigator initialRouteName="home"
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerStyle:{
        //     alignItems: 'center'
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }}
      >
        <Stack.Screen name="home" component={hometabs} />
        <Stack.Screen name="video" component={video} />
      </Stack.Navigator> */}
      <Navigation></Navigation>
    </NavigationContainer>


  );
}