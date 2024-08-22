import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FormContext } from './FormContext';
import { useNavigation } from '@react-navigation/native';

const Form2Screen = () => {
    const { addressDetails, setAddressDetails } = useContext(FormContext);
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        let newErrors = {};

        if (!addressDetails.address) {
            valid = false;
            newErrors.address = 'Address is required';
        }

        if (!addressDetails.city) {
            valid = false;
            newErrors.city = 'City is required';
        }

        if (!addressDetails.state) {
            valid = false;
            newErrors.state = 'Country is required';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleNext = () => {
        if (validate()) {
            navigation.navigate('Form3');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Address Details</Text>
            <Text style={styles.label}>Address</Text>
            <TextInput
                value={addressDetails.address}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, address: text })}
                style={[styles.input, errors.address && styles.inputError]}
                placeholder="Enter your address"
            />
            {errors.address && <Text style={styles.error}>{errors.address}</Text>}
            
            <Text style={styles.label}>City</Text>
            <TextInput
                value={addressDetails.city}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, city: text })}
                style={[styles.input, errors.city && styles.inputError]}
                placeholder="Enter your city"
            />
            {errors.city && <Text style={styles.error}>{errors.city}</Text>}
            
            <Text style={styles.label}>Country</Text>
            <TextInput
                value={addressDetails.state}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, state: text })}
                style={[styles.input, errors.state && styles.inputError]}
                placeholder="Enter your country"
            />
            {errors.state && <Text style={styles.error}>{errors.state}</Text>}
            
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

export default Form2Screen;
