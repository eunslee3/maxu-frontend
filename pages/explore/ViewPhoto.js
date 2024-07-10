import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ViewPhoto = ({ route, navigation }) => {
  console.log(route.params)
  return (
    <View>
      <Image source={route.params.photo} />
    </View>
  )
}

export default ViewPhoto