import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const MultiUseButton = ({
    text,
    textColor,
    buttonColor,
    action,
    additionalStyles
}) => {
  const backgroundColor = buttonColor === 'green' ? '#4caf50' : '#e6e6e6'
  console.log('additional styles: ', additionalStyles)
  return (
    <TouchableOpacity 
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 60,
        borderRadius: 12,
        backgroundColor: backgroundColor,
      }} 
      onPress={action}
    >
      <Text style={{ color: textColor, fontSize: 17 }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default MultiUseButton