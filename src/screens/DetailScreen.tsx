import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import { Button } from '@react-navigation/elements'
const DetailScreen = ({route}:any) => {
    const navigation=useNavigation<any>();
    // const username=route.params?.username ||'Ram'
    const {username="Ram"}=route.params ||{}
  return (
    <View>
      <Text>DetailScreen :Hi {username}</Text>

       {/* <Button onPress={()=>navigation.goBack('Home')} title="Go to Home" />
         */}
       <Button onPress={()=>navigation.navigate('Profile')} title="Go to Profile" />
      
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})




//for dynamic title to get
/* import { StyleSheet, Text, View ,Button} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const DetailScreen = ({route}:any) => {
    const navigation=useNavigation<any>();

    const {username="Ram"}=route.params ||{}


    //for dynamic title
    useLayoutEffect(()=>{
      navigation.setOptions({
        title:"User Detail Screen"
      })
    },[navigation])



  return (
    <View>
      <Text>DetailScreen :Hi {username}</Text>

       <Button onPress={()=>navigation.navigate('Profile')} title="Go to Profile" />
      
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({}) */