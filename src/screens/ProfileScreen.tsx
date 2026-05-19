import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const ProfileScreen = () => {
    const navigation=useNavigation<any>()
  return (
    <View>
      <Text>ProfileScreen</Text>

{/* popTo khali kar deta hai stack ko 

Goes back to a specific screen already present in the stack.
Removes screens above that target screen.
*/}
       {/* <Button onPress={()=>navigation.popTo('Home')} title="Go to Home" /> */}


{/* popToTop agar deep nested stack pe aa gye  ho toh  adn pehli wali screen mai le aata hai hai and baki satck ko nikal deta hai toh 
Goes all the way back to the first screen in the current stack.
Removes every screen above it.

*/}
       <Button onPress={()=>navigation.popToTop('')} title="Go to Home" />


        {/* 
        replace() is used to swap the current screen with another screen.
It removes the current screen from the stack and adds the new one in its place.*/}
  {/*      <Button onPress={()=>navigation.replace('Home')} title="Go to Home" /> */}
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})