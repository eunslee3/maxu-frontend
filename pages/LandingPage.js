import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import landingPageImage from '../assets/landing_page_image.png';
import MultiUseButton from './utils/MultiUseButton';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.imageContainer}>
          <Image style={{ width: 300, height: 300}} source={require('../assets/images/landing_page_image.png')} />
        </View>
        <View style={styles.contentContainer}>
        <View label='header' style={styles.textContainer}>
          <Text style={styles.header}>Welcome to</Text>
          <Text style={styles.header}>Virtual Vogue</Text>
        </View>
        <View label='text' style={styles.textContainer}>
          <Text style={styles.text}>Discover trendy fashion styles and virtually try on clothes from online stores</Text>
          </View>
        <View label='action buttons' style={styles.buttonContainer}>
          <TouchableOpacity 
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 350,
              height: 60,
              borderRadius: 12,
              backgroundColor: '#4caf50',
              marginBottom: 10,
            }} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ color: 'white', fontSize: 17 }}>Login/Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 350,
              height: 60,
              borderRadius: 12,
              backgroundColor: '#e6e6e6',
              marginTop: 10,
            }} 
          >
            <Text style={{ color: 'black', fontSize: 17 }}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },
    textContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        padding: 10,
        fontSize: 16
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }
  });

export default LandingPage