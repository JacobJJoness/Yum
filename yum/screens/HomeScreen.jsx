import React from 'react';
import { View, Text } from 'react-native';
import BottomNav from '../Components/BottomNav';

function HomeScreen() {
  return (
    <View className=" flex-1 justify-center items-center bg-white ">
      {/*  TopNav goes here*/}
      {/*  This needs to be its own component for rendering recipes later*/}
      <View className="h-5/6 mb-20">

      </View>
      
    
      <BottomNav/>
    </View>
  );
}

export default HomeScreen;
