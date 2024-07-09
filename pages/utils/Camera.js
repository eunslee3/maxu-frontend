import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Button } from 'react-native';

const Camera = () => {
  const [facing, setFacing] = useState('front');
  const [permission, requestPermission] = useCameraPermissions();

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  console.log(permission)

  if (!permission?.granted) {
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
      <Button onPress={requestPermission} title="grant permission" />
    </View>
  }
  
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.capture]}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    position: 'absolute',
    bottom: 20,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Camera