import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';



const Stack= createNativeStackNavigator({
  screens:{
    Home:HomeScreen, 
    Details:DetailScreen,
    Profile:ProfileScreen
  }
}) ;//ye inernally  bolta aapke jitne bhi screen hai wo muhe laake dedo


const Navigation=createStaticNavigation(Stack);

export default function App(){
  return <Navigation/>
}


//src folder banao 
// uske andar do folder screen ,navigators