import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const ExploreFashion = ({ navigation }) => {

  return (
    <View styles={styles.container} >
      <View style={styles.contentContainer} >
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
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
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