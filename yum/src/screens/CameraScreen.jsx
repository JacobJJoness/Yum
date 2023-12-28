import { Camera, CameraType,takePictureAsync } from 'expo-camera';
import { createWorker } from 'tesseract.js';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import BackButton from '../Components/BackButton';

export default function CameraScreen() {
  let cameraRef = useRef();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  
  //tesseract reader that accepts an image using worker.recognize//
  const [imageUri, setImageUri] = useState(null);
  
  const RecieptReader = async () => {
    const worker = await createWorker('eng');
    const ret = await worker.recognize(CameraComponent.imageUri);
    console.log(ret.data.text);
    await worker.terminate();
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const takePicture = async () => {
    if (permission.granted) {
      let options = {
        quality: 0.5,
        base64: true,
        exif: false
      };
      let photo = await cameraRef.current.takePictureAsync(options);
      console.log("Picture stored");
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <BackButton previous="HomeScreen"/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button} onPress={takePicture}>
            <Text className="bg-white">HELLO</Text>
          </TouchableOpacity>
        </View>
      </Camera>
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});