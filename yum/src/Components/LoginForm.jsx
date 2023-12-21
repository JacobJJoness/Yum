import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator,KeyboardAvoidingView  } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import React, {useState} from 'react'
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginForm() {
    const navigation = useNavigation();

    //user input variables
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[loading,setLoading] = useState(false);
    const auth =FIREBASE_AUTH;

    const LoginSubmit = async () => {
        setLoading(true);
        
        try{
            const response = await signInWithEmailAndPassword(auth,email,password)
            console.log(response);
            alert('Check your emails!');
        }catch(error) {
            console.log(error);
            alert('Login Failed: ' + error.message);
        } finally{
            setLoading(false);
        }
  

        // Navigate to the Details screen
        navigation.navigate('HomeScreen');
  };
  return (
    <>
        <KeyboardAvoidingView behavior ='padding'>
            <View>
                <View className ='items-center mb-8'>
                    <Image source={require('../../assets/Logo.png')} className ='w-32 h-24 mb-1' />
                </View>

                <TextInput
                    className = "p-4 border-2 border-green-300 rounded-lg"
                    placeholder="Email"
                    value={email}
                    autoCapitalize='none'
                    onChangeText={(text) => setEmail(text)}
                />
        
            
                <TextInput
                    className = "p-4 mt-5 border-2 border-green-300 rounded-lg"
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            { loading ? (
                <ActivityIndicator size = "large" color="00ff00"/>
            ) : (
                <TouchableOpacity
                className = "bg-green-400 p-5 mt-8 rounded-lg items-center"
                onPress={() => LoginSubmit({navigation})}
                >
                    <Text className=" text-white font-bold items-center text-xl ">Log In</Text>
                </TouchableOpacity>
            )}
        </KeyboardAvoidingView>
    </>
  )
}