import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

export default function Camera({ navigation }) {
  const [facing, setFacing] = useState('front');
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

  const handleUploadCameraPhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    const manipulatedImage = await ImageManipulator.manipulateAsync(
      photo.uri,
      [],
      { base64: true }
    )
    const aspectRatio = photo.width / photo.height;
    const maxWidth = windowWidth - 120;
    const maxHeight = maxWidth / aspectRatio;
    console.log(manipulatedImage)
    navigation.navigate('View Photo',{ photo: photo, maxWidth: maxWidth, maxHeight: maxHeight})
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={cameraRef}
        base64={true}
      >
        <View style={styles.buttonContainer}>
          <MaterialIcons
            style={{ marginLeft: 10 }}
            name="photo-library"
            size={50}
            color="white"
          />
          <TouchableOpacity onPress={() => toggleCameraFacing()}>
            <MaterialCommunityIcons
              style={{ marginRight: 10 }}
              name="camera-flip-outline"
              size={50}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </CameraView>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.capture}
          onPress={handleUploadCameraPhoto}
        />
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Explore Fashion")}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
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
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    padding: 4,
    bottom: 40,
    left: 0,
    right: 0,
  },
  capture: {
    backgroundColor: 'white',
    width: 85,
    height: 85,
    borderRadius: 50,
  },  
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    position: 'absolute', 
    left: 10, 
    top: 60,
  }
});