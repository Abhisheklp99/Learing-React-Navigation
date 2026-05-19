//For Tabs that is Dynamic
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


function MyTab(){
    return (
<Tab.Navigator initialRouteName='Search' 
screenOptions={({route})=>({
    tabBarStyle:{
        height:80,
        paddingBottom:10
    },
    tabBarActiveTintColor:'tomato',
    tabBarInactiveTintColor:'gray',
    
    tabBarIcon:({focused,color,size})=>{
        const icon = route.name ==='Home' 
        ? (focused ? 'home' :'home-outline')
        : route.name ==='Search' 
        ? (focused ?'search':'search-outline')
        : (focused ?'chatbubble' :"chatbubble-outline");

        return <Ionicons name={icon as any} size={size} color={color} />
    }
})}
>
        {/* <Tab.Screen name="Home" component={HomeScreen}
        options={{
            title:"Dashboard",
            tabBarLabel:'Start'
        }}
        
        /> */}
        <Tab.Screen name="Home" component={HomeScreen}
        
        />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen}
        options={{ tabBarBadge:3}}
        />
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
