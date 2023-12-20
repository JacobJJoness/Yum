import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import LoginForm from '../Components/LoginForm';
import RegisterForm from '../Components/RegisterForm';
function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));

  

  const toggleForm = (formType) => {
    // Fade out the buttons
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      // After fade out, toggle the form visibility
      if (formType === 'login') {
        setShowLoginForm(!showLoginForm);
        setShowRegisterForm(false);
      } else if (formType === 'register') {
        setShowRegisterForm(!showRegisterForm);
        setShowLoginForm(false);
      }

      // Fade in the form
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <View className = "flex-1 items-center justify-center bg-green-100">
      {/* */}
      <Animated.View
        style={{
          opacity: fadeAnim,
          width: '80%',
        }}
      >
        {!showLoginForm && !showRegisterForm ? (
          <View style={{ alignItems: 'center' }}>
            {/* */}
            <View className ='items-center mb-8'>
              <Image source={require('../../assets/Logo.png')} className ='w-32 h-24 mb-1' />
            </View>
          {/* */}
            <TouchableOpacity
              onPress={() => toggleForm('login')}
              className = " items-center justify-center bg-green-400 w-1/2 h-16 p-1 mb-2 rounded-md shadow-md "
            >
              <Text className=" text-white  text-2xl font-bold  ">Log In</Text>
            </TouchableOpacity>

            {/* */}
            <TouchableOpacity
              onPress={() => toggleForm('register')}
              className = " items-center justify-center bg-green-400 w-1/2 h-16 p-1 mb-2 rounded-md  shadow-md"
            >
              <Text className=" text-white  text-2xl font-bold  ">Register</Text>
            </TouchableOpacity>

          </View>
        ) : (
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
            {showLoginForm && (
              <LoginForm/>
            )}
            {showRegisterForm && (
              <RegisterForm/>
            )}
          </View>
        )}
      </Animated.View>
    </View>
  );
}

export default Login;











{/* <View className ='bg-white p-8 rounded-lg w-4/5 shadow-xl '>
          <View className ='items-center mb-8'>
            {/* Replace the following line with your logo 
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
        </View> */}
