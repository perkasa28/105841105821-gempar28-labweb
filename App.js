import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{flex:1, flexDirection:'row'}}>
      <View style={{
        flex:1,
        backgroundColor:'red',
        }}></View>
        <View style={{
        flex:1,
        backgroundColor:'blue'
        }}></View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
