import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Camera({ navigation }) {
  const [facing, setFacing] = useState('back');
  const [pictureData, setPictureData] = useState();
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(undefined);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        facing={facing}
        ref={cameraRef}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Explore Fashion')}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.capture}
            onPress={async () => {
              const photo = await cameraRef.current?.takePictureAsync();
              navigation.navigate('View Photo',{ photo: photo})
            }}
          />
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'between',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    margin: 40,
    borderWidth: 1,
  },
  capture: {
    backgroundColor: 'white',
    width: 85,
    height: 85,
    borderRadius: 50
  },  
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});