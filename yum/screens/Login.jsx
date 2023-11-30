import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';


function Login() {
  return (
    <View className ='flex-1 w-screen items-center justify-center bg-background'>
      <View className ='bg-white p-8 rounded-lg w-4/5 shadow-xl '>
        <View className ='items-center mb-8'>
          {/* Replace the following line with your logo */}
          <Image source={require('../assets/Logo.png')} className ='w-32 h-24 mb-1' />
          
        </View>
        <View>
          <Text className ='font-semibold text-primary m-2'>Username</Text>
          <TextInput
            className ='w-full p-2 border border-green-400 rounded'
            placeholder="Enter your username"
          />
        </View>
        <View>
          <Text className ='font-semibold text-primary m-2'>Password</Text>
          <TextInput
            className ='w-full p-2 border border-green-400 rounded'
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
        <TouchableOpacity className ='w-full bg-green-400 text-white py-2 px-4 rounded mt-4'>
          <Text className ='text-center font-semibold'>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login