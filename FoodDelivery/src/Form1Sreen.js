import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FormContext } from './FormContext';
import { useNavigation } from '@react-navigation/native';

const Form1Screen = () => {
    const { userDetails, setUserDetails } = useContext(FormContext);
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        let newErrors = {};

        if (!userDetails.name) {
            valid = false;
            newErrors.name = 'Name is required';
        }

        if (!userDetails.email || !/\S+@\S+\.\S+/.test(userDetails.email)) {
            valid = false;
            newErrors.email = 'Valid email is required';
        }

        if (!userDetails.phone || !/^\d{10}$/.test(userDetails.phone)) {
            valid = false;
            newErrors.phone = 'Valid phone number is required';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleNext = () => {
        if (validate()) {
            navigation.navigate('Form2');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>User Details</Text>
            <Text style={styles.label}>Name</Text>
            <TextInput
                value={userDetails.name}
                onChangeText={(text) => setUserDetails({ ...userDetails, name: text })}
                style={[styles.input, errors.name && styles.inputError]}
                placeholder="Enter your name"
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            
            <Text style={styles.label}>Email</Text>
            <TextInput
                value={userDetails.email}
                onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="Enter your email"
                keyboardType="email-address"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            
            <Text style={styles.label}>Phone</Text>
            <TextInput
                value={userDetails.phone}
                onChangeText={(text) => setUserDetails({ ...userDetails, phone: text })}
                style={[styles.input, errors.phone && styles.inputError]}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
            />
            {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
            
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    inputError: {
        borderColor: 'red',
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Form1Screen;
