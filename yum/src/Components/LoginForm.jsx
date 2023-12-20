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
                    style={{
                        width: '100%',
                        padding: 10,
                        borderColor: '#17ec57',
                        borderWidth: 1,
                        borderRadius: 5,
                        marginBottom:20
                    }}
                    placeholder="Email"
                    value={email}
                    autoCapitalize='none'
                    onChangeText={(text) => setEmail(text)}
                />
        
            
                <TextInput
                    style={{
                        width: '100%',
                        padding: 10,
                        borderColor: '#17ec57',
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            { loading ? (
                <ActivityIndicator size = "large" color="0000ff"/>
            ) : (
                <TouchableOpacity
                    style={{
                    backgroundColor: '#17ec57',
                    paddingVertical: 15,
                    marginTop: 20,
                    borderRadius: 5,
                    
                    }}
                    onPress={() => LoginSubmit({navigation})}
                >
                    <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Log In</Text>
                </TouchableOpacity>
            )}
        </KeyboardAvoidingView>
    </>
  )
}