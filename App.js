import { StyleSheet, text, View,Button,Text, TextInput } from 'react-native'
import React from 'react'

const ButtonCostum  = ({ text, color }) => {
  return (
    <View style={{
      backgroundColor: color,
      width: 250,
      height: 100,
      borderRadius: 10 ,
      justifyContent: 'center',
      marginBottom: 10,
    }}>
      <Text style={{
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
      }}>
        {text}
      </Text>
    </View>
  )
}

const App=() => {
  return(
     <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     }}>
      <ButtonCostum text="login" color="green" />
      <ButtonCostum text="registed" color="blue" />
      <ButtonCostum text="registed" color="blue" />

     </View> 
        
  )
}

export default App

const styles = StyleSheet.create({})