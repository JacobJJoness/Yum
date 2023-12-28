import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native';
import {useNavigation} from "@react-navigation/native";
//This file is for a Navbar at the top of the Home Screen. It contains a centered logo image, and a button in the top right 
//corner for the following options manual entry of ingredients, the user's saved recipes, settings and a log out option(though we may want to hide this later)
function BottomNav() {
  {/* button onpress functions go here outside and before to the top*/}
  const navigation = useNavigation();

  const handleIngredients = () => {
    navigation.navigate('IngredientsList');

  }
  const handleCam = () =>{
    navigation.navigate('CameraScreen');
  }


  
  return (
    <View className=" h-28 w-screen bg-green-700 ">
      <View className="flex flex-row  w-full h-full justify-center items-center">
        <TouchableOpacity 
          className="w-1/4 h-1/2 m-2 mb-6 p-8 justify-center items-center bg-green-700 rounded-3xl shadow-sm shadow-black  "
          onPress = {() => handleIngredients({navigation})}
        >
          <Image source={require('../../assets/Instacart.png')} className ='' />
        </TouchableOpacity>
  
        <TouchableOpacity className="w-1/4 h-1/2 m-2 mb-6 p-8 justify-center items-center bg-green-700 rounded-3xl shadow-sm shadow-black "
         onPress = {() => handleCam({navigation})}
        >
          <Image source={require('../../assets/Camera.png')} className ='' />
        </TouchableOpacity>

        <TouchableOpacity className="w-1/4 h-1/2 m-2 mb-6 p-8 justify-center items-center bg-green-700 rounded-3xl shadow-sm shadow-black ">
          <Image source={require('../../assets/Pencil.png')} className ='' />
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default BottomNav