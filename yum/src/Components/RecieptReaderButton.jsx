import { createWorker } from 'tesseract.js';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';

const CameraComponent = () => {
    const [imageUri, setImageUri] = useState(null);
  
    const takePicture = async (camera) => {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      setImageUri(data.uri);
    };
  
    const pickImage = () => {
      const options = {
        title: 'Select Image',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
  
      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setImageUri(response.uri);
        }
      });
    };
  
    return (
      <View style={{ flex: 1 }}>
        <RNCamera
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
        >
          {({ camera, status }) => {
            if (status !== 'READY') return <Text>Waiting...</Text>;
  
            return (
              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => takePicture(camera)}>
                  <Text style={{ fontSize: 20, marginBottom: 10, color: 'white' }}>Take Picture</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pickImage}>
                  <Text style={{ fontSize: 20, marginBottom: 20, color: 'white' }}>Pick Image</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
        {imageUri && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>Captured Image:</Text>
            <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginTop: 20 }} />
          </View>
        )}
      </View>
    );
  };
  


//tesseract reader that accepts an image using worker.recognize//
const RecieptReader = async () => {
  const worker = await createWorker('eng');
  const ret = await worker.recognize(CameraComponent.imageUri);
  console.log(ret.data.text);
  await worker.terminate();
};



const RecieptReaderButton = () => {
  return (
    <TouchableOpacity
      style={('bg-blue-500 p-4 rounded')}
      onPress={RecieptReader()}
    >
      <Text style={('text-white font-bold')}>{'camera'}</Text>
    </TouchableOpacity>
  );
};

export default RecieptReaderButton;