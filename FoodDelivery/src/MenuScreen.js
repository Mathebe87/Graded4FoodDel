import React, { useContext } from 'react';
import { FlatList, Text, View, Button, Image, StyleSheet } from 'react-native';
import { CartContext } from './CartContext';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => {
    const { addToCart } = useContext(CartContext);
    const navigation = useNavigation();

    const foodItems = [
        { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: 120.85, image: require('../assets/pizza.jpeg') },
        { id: 2, name: 'Burger', description: 'Juicy beef burger', price: 89.99, image: require('../assets/Burger.jpeg') },
        { id: 3, name: 'Salad', description: 'Fresh green salad', price: 45.99, image: require('../assets/Salad.jpeg') },
        { id: 4, name: 'Ribs', description: 'Succulent pork ribs', price: 102.99, image: require('../assets/Pork_rib.jpeg') },
        { id: 5, name: 'Chips', description: 'Crispy potato chips', price: 35.99, image: require('../assets/fries.jpeg') },
        { id: 6, name: 'Steak', description: 'Juicy beef steak', price: 180.99, image: require('../assets/Steak_beef.jpeg') },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to our Food Delivery!</Text>
            <FlatList
                data={foodItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
                        </View>
                        <Button
                            title="Add to Cart"
                            onPress={() => addToCart(item)}
                            color="#007BFF"
                        />
                    </View>
                )}
                contentContainerStyle={styles.listContent}
            />
            <View style={styles.navigationButtons}>
                <Button
                    title="Go to Cart"
                    onPress={() => navigation.navigate('Cart')}
                    color="#1e90ff"
                />
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
                    color="#1e90ff"
                />
                <Button
                    title="Go to Form"
                    onPress={() => navigation.navigate('Form1')}
                    color="#1e90ff"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        padding: 15,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f4a460',
        marginBottom: 20,
        textAlign: 'center',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginVertical: 8,
        padding: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 12,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: '#007BFF',
    },
    listContent: {
        paddingBottom: 20,
    },
    navigationButtons: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default MenuScreen;
