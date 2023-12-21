import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Dropdown from 'react-native-element-dropdown';

export default function IngredientsList() {
    // Mock data, replace with Firebase data
    const foodGroups = {
        fruits: ["Apple", "Banana", "Orange"],
        vegetables: ["Carrot", "Broccoli", "Spinach"],
        grains: ["Bread", "Rice", "Pasta"],
        protein: ["Chicken", "Beef", "Tofu"],
        dairy: ["Milk", "Cheese", "Yogurt"]
    };

    // State to hold selected values
    const [selectedItems, setSelectedItems] = useState({
        fruits: null,
        vegetables: null,
        grains: null,
        protein: null,
        dairy: null
    });

    // Function to handle selection change
    const onValueChange = (group, value) => {
        setSelectedItems({ ...selectedItems, [group]: value });
    };

    return (
      <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Ingredients List</Text>
          {Object.keys(foodGroups).map(group => (
              <View key={group} style={{ marginBottom: 20 }}>
                  <Text style={{ fontSize: 16, marginBottom: 5 }}>{group.charAt(0).toUpperCase() + group.slice(1)}</Text>
                  <Dropdown
                      data={foodGroups[group].map(item => ({ label: item, value: item }))}
                      labelField="label"
                      valueField="value"
                      placeholder={`Select a ${group}`}
                      value={selectedItems[group]}
                      onChange={item => onValueChange(group, item.value)}
                      style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 4, padding: 10 }}
                      maxHeight={300}
                  />
              </View>
          ))}
      </View>
  );
}


