// import * as React from 'react';

// import {  NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../../screens/HomeScreen';
// import DetailScreen from '../../screens/DetailScreen';
// import ProfileScreen from '../../screens/ProfileScreen';


// // const DynamicStack=createNativeStackNavigator();

// //can be written as below too
// const Stack=createNativeStackNavigator();


// function MyStack(){

//     return (
//         // <DynamicStack.Navigator></DynamicStack.Navigator>


//         //overall design ipdate karne hai toh iska style main Syle.navigatir mai add karoai jaake udpate kardo
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen}  options={{
//             // to show ad hide the header
//                 // headerShown:false,
//                 title:'Dashboard',
//                 headerStyle:{
//                     backgroundColor:'#92d8b8'
//                 },
//                 headerTintColor:"#bb5465",
//                 headerTitleStyle:{
//                     fontWeight:'bold',
//                     fontSize:25
//                 },
//                 headerTitleAlign:'center',

//             }}/>
//             <Stack.Screen name="Details" component={DetailScreen} />
//             <Stack.Screen name="Profile" component={ProfileScreen} />
//         </Stack.Navigator>

//     )
// }

// export default function DynamicStackNavigator(){
//     return (
//       <NavigationContainer >
//         <MyStack />
//       </NavigationContainer>
//     );
// }





import * as React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';
import ProfileScreen from '../../screens/ProfileScreen';


// const DynamicStack=createNativeStackNavigator();

//can be written as below too
const Stack=createNativeStackNavigator();


function MyStack(){

    return (
        // <DynamicStack.Navigator></DynamicStack.Navigator>

        <Stack.Navigator 
        // Applying the style unverally on call screen
         screenOptions={{
        headerStyle: {
          backgroundColor: '#92d8b8',
        },
        headerTintColor: '#bb5465',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
        headerTitleAlign: 'center',
        animation:"flip"
      }}
        >
            <Stack.Screen name="Home" component={HomeScreen}  />
            <Stack.Screen name="Details" component={DetailScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>

    )
}

export default function DynamicStackNavigator(){
    return (
      <NavigationContainer >
        <MyStack />
      </NavigationContainer>
    );
}