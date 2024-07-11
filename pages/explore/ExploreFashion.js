import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

const ExploreFashion = ({ navigation }) => {

  return (
    <View styles={styles.container} >
      <View style={styles.contentContainer} >
        <View 
          style={{
            flex: 0.3,
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <AntDesign
            name="back" 
            size={28} 
            color="black"
            style={{ marginLeft: 20 }}
            // Once we get a homepage, this'll navigate back to the homepage instead
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <Text style={styles.header}>Ready to try on some new styles?</Text>
        <Text style={styles.text} >Take a photo or upload an image of yourself to get started!</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Camera')}
          title='grant permission'
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Take a Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[ styles.button, { backgroundColor: '#e6e6e6'}]} >
          <Text style={{ color: 'black', fontSize: 16 }}>Upload an Image</Text>
        </TouchableOpacity>
        <View style={{ flex: 0.3 }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    textAlign: 'center'
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#4caf50',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18
  }
})

export default ExploreFashion