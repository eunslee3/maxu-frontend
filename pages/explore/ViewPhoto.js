import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ViewPhoto = ({ route, navigation }) => {

  // TODO: Make the API call to stability.ai for image-to-image generation

  return (
    <View style={styles.container}>
      <View 
          style={{
            flex: 0.3,
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <Text style={styles.header}>Confirm Reference Photo</Text>
        </View>
      <View style={styles.imageContainer}>
        <Image 
          style={{ width: route.params.maxWidth, height: route.params.maxHeight, resizeMode: 'content' }}
          source={route.params.photo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, { marginRight: 4, backgroundColor: '#e6e6e6' }]}
          onPress={() => navigation.navigate('Explore Fashion')}
        >
          <Text>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginLeft: 4, backgroundColor: '#4caf50' }]}>
          <Text style={{ color: 'white' }}>Generate!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  image: {
    // width: 235,
    height: 500,
    resizeMode: 'contain',
    borderRadius: 20,
    borderWidth: 3,
  },
  buttonContainer: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    fontSize: 30,
    fontFamily: 'Open-Sans-Regular'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 50,
    borderRadius: 10,
  }
});

export default ViewPhoto