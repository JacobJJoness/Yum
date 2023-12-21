import React from 'react';
import { View, Text } from 'react-native';
import TopNav from '../Components/TopNav';
import BottomNav from '../Components/BottomNav';
import RecieptReaderButton from '../Components/RecieptReaderButton';

function HomeScreen() {
  return (
    <View className=" flex-1 justify-center items-center bg-green-100 ">
      <TopNav/>
      {/*  TopNav goes here*/}
      {/* on button press run RecieptReader function for testing purposes */}
      <RecieptReaderButton />
      <View className="h-4/6 mb-20">

      </View>
    
      <BottomNav/>
    </View>
  );
}

export default HomeScreen;

