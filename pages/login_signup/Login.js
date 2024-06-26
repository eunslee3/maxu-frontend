import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Shadow } from 'react-native-shadow-2';

const Login = () => {
  const [username, setUsername] = useState('')
  return (
    <View style={styles.container}>
      {/* Shadow is not abiding well with the layout... */}
      <Shadow style={styles.login}>
        <View label='textContainer' style={styles.textContainer}>
          <Text label='header' style={styles.header}>Welcome!</Text>
          <Text label='text' style={styles.text}>Login to explore your fashion styles</Text>
        </View>
        <View label='inputContainer' style={styles.inputContainer}>
          <TextInput 
            label='username'
            onChangeText={setUsername}
            style={styles.input}
            placeholder='Email'
          />
          <TextInput 
            label='password'
            onChangeText={setUsername}
            style={styles.input}
            placeholder='Password'
          />
          <TouchableOpacity 
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '90%',
              height: 40,
              borderRadius: 12,
              backgroundColor: '#4caf50',
              margin: 6,
            }} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ color: 'white', fontSize: 12, fontFamily: 'OpenSans-Regular' }}>Login</Text>
          </TouchableOpacity>
          <View label='otherActions' style={{ flex: 1, flexDirection: 'row', width: 240, margin: 6, justifyContent: 'space-between'}}>
            <Text style={{ color: '#030303', fontSize: 12, fontFamily: 'OpenSans-Regular' }} >Sign Up</Text>
            <Text style={{ color: '#030303', fontSize: 12, fontFamily: 'OpenSans-Regular' }} >Forget Password?</Text>
          </View>
        </View>
      </Shadow>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  login: {
    // flex: 0.6,
    width: '100%',
    height: 300,
    flexDirection: 'column',
    borderRadius: 10,
  },
  textContainer: {
    width: 280,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular'
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontSize: 14,
    color: '#030303',
    fontFamily: 'OpenSans-Light',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    margin: 6,
  }
})

export default Login