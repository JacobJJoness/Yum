import React, { useState } from 'react';
import {useNavigation} from "@react-navigation/native";
import { View, Text, TextInput, Image, TouchableOpacity, Animated } from 'react-native';

function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));

  const navigation = useNavigation();
  const RegSubmit = () => {
    // Perform API call here if needed

    // Navigate to the Details screen
    navigation.navigate('HomeScreen');
  };

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
    <View className = "flex-1 items-center justify-center bg-green-100" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4f7' }}>
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
              <Image source={require('../assets/Logo.png')} className ='w-32 h-24 mb-1' />
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
              <>
                <View>
                  <View className ='items-center mb-8'>
                    <Image source={require('../assets/Logo.png')} className ='w-32 h-24 mb-1' />
                  </View>
                  <Text style={{ fontWeight: 'bold', color: '#17ec57', marginBottom: 10 }}>Username</Text>
                  <TextInput
                    style={{
                      width: '100%',
                      padding: 10,
                      borderColor: '#17ec57',
                      borderWidth: 1,
                      borderRadius: 5,
                    }}
                    placeholder="Enter your username"
                  />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontWeight: 'bold', color: '#17ec57', marginBottom: 10 }}>Password</Text>
                  <TextInput
                    style={{
                      width: '100%',
                      padding: 10,
                      borderColor: '#17ec57',
                      borderWidth: 1,
                      borderRadius: 5,
                    }}
                    placeholder="Enter your password"
                    secureTextEntry
                  />
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#17ec57',
                    paddingVertical: 15,
                    marginTop: 20,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Log In</Text>
                </TouchableOpacity>
              </>
            )}
            {showRegisterForm && (
              <>
                <View>
                  <View className ='items-center mb-8'>
                    <Image source={require('../assets/Logo.png')} className ='w-32 h-24 mb-1' />
                  </View>
                  <Text style={{ fontWeight: 'bold', color: '#2ecc71', marginBottom: 10 }}>Email</Text>
                  <TextInput
                    style={{
                      width: '100%',
                      padding: 10,
                      borderColor: '#2ecc71',
                      borderWidth: 1,
                      borderRadius: 5,
                    }}
                    placeholder="Enter your email"
                  />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontWeight: 'bold', color: '#2ecc71', marginBottom: 10 }}>Phone Number</Text>
                  <TextInput
                    style={{
                      width: '100%',
                      padding: 10,
                      borderColor: '#2ecc71',
                      borderWidth: 1,
                      borderRadius: 5,
                    }}
                    placeholder="Enter your phone number"
                  />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontWeight: 'bold', color: '#2ecc71', marginBottom: 10 }}>Password</Text>
                  <TextInput
                    style={{
                      width: '100%',
                      padding: 10,
                      borderColor: '#2ecc71',
                      borderWidth: 1,
                      borderRadius: 5,
                    }}
                    placeholder="Enter your password"
                    secureTextEntry
                  />
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#2ecc71',
                    paddingVertical: 15,
                    marginTop: 20,
                    borderRadius: 5,
                  }}
                  onPress={() => RegSubmit({navigation})}
                >
                  <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Register</Text>
                </TouchableOpacity>
              </>
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
