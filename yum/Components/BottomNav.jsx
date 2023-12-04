import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
//This file is for a Navbar at the top of the Home Screen. It contains a centered logo image, and a button in the top right 
//corner for the following options manual entry of ingredients, the user's saved recipes, settings and a log out option(though we may want to hide this later)
function BottomNav() {
  return (
    <View className=" h-20 w-screen bg-green-700 ">
      <View className="flex flex-row  w-full h-full justify-center items-center">
        <TouchableOpacity className="w-1/4 h-3/4 m-2 p-2 justify-center items-center bg-green-500  border-2 rounded-xl shadow-2xl  ">
          <Text className="text-white ">Ingredients</Text>
        </TouchableOpacity>
  
        <TouchableOpacity className="w-1/4 h-3/4 m-2 p-2 bg-green-500 justify-center items-center border-2 rounded-xl shadow-2xl ">
          <Text className="text-white">Cam</Text> 
        </TouchableOpacity>

        <TouchableOpacity className="w-1/4 h-3/4  m-2 p-2 bg-green-500 justify-center items-center border-2 rounded-xl shadow-2xl ">
          <Text className="text-white">Meal</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default BottomNav