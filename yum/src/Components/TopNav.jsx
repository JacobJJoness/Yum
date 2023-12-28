import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import BackButton from './BackButton';
function TopNav(props) {
  return (
    <View className=' flex-1 bg-green-700 w-screen h-1/6'>
        <BackButton previous={props.prevPage}/>
    </View>
  )
}

export default TopNav