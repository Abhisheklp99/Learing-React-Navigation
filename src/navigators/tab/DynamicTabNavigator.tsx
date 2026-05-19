//For Tabs that is Dynamic
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import SearchScreen from '../../screens/SearchScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';


//for stack starts
const HomeStack=createNativeStackNavigator()

function HomeStackScreens(){
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            
            <HomeStack.Screen name="Details" component={DetailScreen} />

        </HomeStack.Navigator>
        
    )
}


//for stack starts ends 

const Tab = createBottomTabNavigator();


function MyTab(){
    return (
<Tab.Navigator>
    
{/* We will apply tab and stack use */}
           {/* we want home and detail screen stacked */}
            
            <Tab.Screen  name="Overview" component={HomeStackScreens}
            options={{
                headerShown:false
            }}
            />


           <Tab.Screen name="Search" component ={SearchScreen} />
           <Tab.Screen name="Profile" component ={ProfileScreen} />

        
      </Tab.Navigator>
    )
}

export default function DynamicTabNavigator() {
  return (
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  );
}
