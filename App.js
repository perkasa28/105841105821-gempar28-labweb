import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ 
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center' 
       }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        width: '60%'
        }}>
        <View style={{ 
        width: '45%', 
        height: 50, 
        backgroundColor: 'blue',
        borderRadius:20, 
        alignItems:'center', 
        justifyContent:'center'
        }}>
        <Text style={{color:'white'}}>Login</Text>
        </View>
        <View style={{ 
        width: '45%', 
        height: 50, 
        backgroundColor: 'blue', 
        borderRadius:20, 
        alignItems:'center', 
        justifyContent:'center'
        }}>
        <Text style={{color:'white',fontweight:'bold'}}>Sign up</Text>
        </View>
      </View>
    </View>
  )
}

export default App
