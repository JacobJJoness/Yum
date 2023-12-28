import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Dropdown } from 'react-native-element-dropdown';
import TopNav from '../Components/TopNav';

export default function IngredientsList() {
    // Mock data, replace with Firebase data
    const foodGroups = {
        fruits: ["Apple", "Banana", "Orange"],
        vegetables: ["Carrot", "Broccoli", "Spinach"],
        grains: ["Bread", "Rice", "Pasta"],
        proteins: ["Chicken", "Beef", "Tofu"],
        dairy: ["Milk", "Cheese", "Yogurt"]
    };

    // State to hold selected values
    const [selectedItems, setSelectedItems] = useState({
        fruits: null,
        vegetables: null,
        grains: null,
        proteins: null,
        dairy: null
    });

    // Function to handle selection change
    const onValueChange = (group, value) => {
        setSelectedItems({ ...selectedItems, [group]: value });
    };

    return (
        <View className="flex-1 h-screen justify-center items-center bg-green-100 ">
            <TopNav prevPage="HomeScreen"/>
            <View className="h-5/6">
                <Text className="font-bold text-xl mb-2 p-4">Ingredients List</Text>
                {Object.keys(foodGroups).map(group => (
                    <View key={group} className="mb-16 w-screen p-4">
                        <Dropdown
                            data={foodGroups[group].map(item => ({ label: item, value: item }))}
                            labelField="label"
                            valueField="value"
                            placeholder={`Your ${group.charAt(0).toUpperCase() + group.slice(1)}`}
                            value={selectedItems[group]}
                            onChange={item => onValueChange(group, item.value)}
                            
                            className=" w-80 rounded-md  "
                            maxHeight={300}
                        />
                    </View>
                ))}
            </View>
        </View>
  );
}


