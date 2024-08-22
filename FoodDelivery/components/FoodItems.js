import React from 'react';
import { View, Text, Button } from 'react-native';

const FoodItem = ({ item, onAddToCart }) => {
    return (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>${item.price}</Text>
            <Button title="Add to Cart" onPress={onAddToCart} />
        </View>
    );
};

export default FoodItem;
