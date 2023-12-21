import { View, Text,TextInput, Image, TouchableOpacity, KeyboardAvoidingView,ActivityIndicator } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import React,{useState} from 'react';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegisterForm() {
    const navigation = useNavigation();
   //user input variables
   const[email,setEmail] = useState('');
   const[password,setPassword] = useState('');
   const[loading,setLoading] = useState(false);
   const auth =FIREBASE_AUTH;

   const RegSubmit = async () => {
       setLoading(true);
       
       try{
           const response = await createUserWithEmailAndPassword(auth,email,password)
           console.log(response);
           // Navigate to the Details screen
            navigation.navigate('HomeScreen');
       }catch(error) {
           console.log(error);
           alert('Registeration Failed: ' + error.message);
       } finally{
           setLoading(false);
       }
 

       
 };
  return (
    <>
        <KeyboardAvoidingView behavior ='padding'>
            <View className ='items-center mb-8'>
                <Image source={require('../../assets/Logo.png')} className ='w-32 h-24 mb-1' />
            </View>
            
            <TextInput
            value = {email}
            className = "p-4 border-2 border-green-300 rounded-lg"
            placeholder="Email"
            
            onChangeText={(text) => setEmail(text)}
            />
        
          
            <TextInput
                className = "p-4 mt-5 border-2 border-green-300 rounded-lg"
                placeholder="Password"
                secureTextEntry = {true}
                value = {password}
                onChangeText={(text) => setPassword(text)}
            />
            
            { loading ? (
                <ActivityIndicator size = "large" color="00ff00"/>
            ) : (
                <TouchableOpacity
                    className = "bg-green-400 p-5 mt-8 rounded-lg items-center"
                    onPress={() => RegSubmit({navigation})}
                >
                    <Text className =" text-white font-bold items-center text-xl ">Register</Text>
                </TouchableOpacity>
            )}
        </KeyboardAvoidingView>
    </>
  )
}