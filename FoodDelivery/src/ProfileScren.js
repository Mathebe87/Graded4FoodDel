import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { FormContext } from './FormContext';
import { ThemeContext } from './ThemeContext';

const ProfileScreen = () => {
    const { userDetails, addressDetails, paymentDetails } = useContext(FormContext);
    const { theme, updateTheme } = useContext(ThemeContext);

    const cardNumber = paymentDetails?.cardNumber || '';

    return (
        <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.title, { color: theme.textColor }]}>User Information</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Name: {userDetails.name}</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Email: {userDetails.email}</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Phone: {userDetails.phone}</Text>
            </View>

            <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.title, { color: theme.textColor }]}>Address</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Address: {addressDetails.address}</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>City: {addressDetails.city}</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Country: {addressDetails.country}</Text>
            </View>

            <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
                <Text style={[styles.title, { color: theme.textColor }]}>Payment Details</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>
                    Payment: **** **** **** {cardNumber.slice(-4)}
                </Text>
            </View>

            <View style={styles.themeContainer}>
                <Text style={[styles.themeTitle, { color: theme.textColor }]}>Customize Theme</Text>
                <TextInput
                    placeholder="Text Color (e.g., #000000)"
                    placeholderTextColor="#999"
                    onChangeText={(color) => updateTheme({ ...theme, textColor: color })}
                    style={[styles.input, { borderColor: theme.textColor }]}
                />
                <TextInput
                    placeholder="Card Background Color (e.g., #ffffff)"
                    placeholderTextColor="#999"
                    onChangeText={(color) => updateTheme({ ...theme, cardBackground: color })}
                    style={[styles.input, { borderColor: theme.textColor }]}
                />
                <TextInput
                    placeholder="Screen Background Color (e.g., #f9f9f9)"
                    placeholderTextColor="#999"
                    onChangeText={(color) => updateTheme({ ...theme, background: color })}
                    style={[styles.input, { borderColor: theme.textColor }]}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    card: {
        padding: 20,
        marginBottom: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
    themeContainer: {
        marginTop: 30,
    },
    themeTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        fontSize: 16,
    },
});

export default ProfileScreen;
