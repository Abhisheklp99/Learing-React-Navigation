import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'
import { Link, useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
  
// 3d way to go diff screen
const navigation=useNavigation<any>()

  return (
    <View>
      <Text>HomeScreen</Text>
     {/*  <Button screen="Details" >Go to details</Button>  //1st way*/}

     {/* 2nd way  Another way to go to different screen */}
   {/*   <Link screen="Details" >Go to Details</Link> */}

{/* 3rd way and we can send data also*/}

{/*   <Button onPress={()=>navigation.navigate('Details',{username:"Abhishek"})}>Go to Details</Button> */}

  <Button onPress={()=>navigation.navigate('Details')}>Go to Details</Button>


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})