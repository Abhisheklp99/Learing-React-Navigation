/* import * as React from 'react';

import DynamicStackNavigator from './src/navigators/stack/DynamicStackNavigator';

import StaticStackNavigator from './src/navigators/stack/StaticStackNavigator';

export default function App(){
  return <StaticStackNavigator/>
  // return (<DynamicStackNavigator/>)
} */
//src folder banao 
// uske andar do folder screen ,navigators


// ***************************************
// ***************************************
// ***************************************
//For Tabs that is Statics



import * as React from 'react';
import { Text, View } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DynamicTabNavigator from './src/navigators/tab/DynamicTabNavigator';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Profile')}>
        Go to Profile
      </Button>
    </View>
  );
}

function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
}

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  // return <Navigation />;
  return <DynamicTabNavigator />;
}



