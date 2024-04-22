import React from 'react'
import { View, Text } from 'react-native'

const Card = () => {
  return (
    <View style={{
        borderRadius: 40,
        backgroundColor: 'transparent',
        height: 350,
        width:250
    }}>

        <View style={{
            shadowColor: 'black',
            shadowRadius:30,
            shadowOffset:{width: 0, height:40},
            shadowOpacity: 0.8
        }}
        >

        </View>
     
    </View>
  )
}

export default Card
