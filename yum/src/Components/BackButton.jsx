import { View, Text,TouchableOpacity, Image } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import React from 'react'

export default function BackButton(props) {
    const navigation = useNavigation();
    handlePress = () => {
        navigation.navigate(props.previous);
    }
  return (
    <View>
        <TouchableOpacity className="m-6 mt-12" onPress = {() => handlePress({navigation})}>
            <Image source={require('../../assets/BackArrow.png')} className ='' />
        </TouchableOpacity>
    </View>
  )
}