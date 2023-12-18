import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
//This file is for a Navbar at the top of the Home Screen. It contains a centered logo image, and a button in the top right 
//corner for the following options manual entry of ingredients, the user's saved recipes, settings and a log out option(though we may want to hide this later)
function BottomNav() {
  return (
    <View className=" h-1/6 w-screen bg-green-700 ">
      <View className="flex flex-row  w-full h-full justify-center items-center">
        <TouchableOpacity className="w-1/4 h-1/2 m-2 mb-12 p-2 justify-center items-center bg-green-400 rounded-3xl shadow-md shadow-black  ">
          <Text className="text-white font-bold">Ingredients</Text>
        </TouchableOpacity>
  
        <TouchableOpacity className="w-1/4 h-1/2 m-2 mb-12 p-2 bg-green-400 justify-center items-center rounded-3xl shadow-md shadow-black ">
          <Text className="text-white font-bold">Cam</Text> 
        </TouchableOpacity>

        <TouchableOpacity className="w-1/4 h-1/2  m-2 mb-12 p-2 bg-green-400 justify-center items-center rounded-3xl shadow-md  shadow-black ">
          <Text className="text-white font-bold">Meal</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default BottomNav