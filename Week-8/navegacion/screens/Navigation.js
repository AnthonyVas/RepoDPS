import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../Navigation/HomeStack';
import AboutStack from '../Navigation/AboutStack';
import ContactStack from '../Navigation/ContactStack';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeStack} options={{title:'Home'}}/>
            <Stack.Screen name="about" component={AboutStack} options={{title:'About'}}/>
            <Stack.Screen name="contact" component={ContactStack} options={{title:'Contact'}}/>
        </Stack.Navigator>
    );
}