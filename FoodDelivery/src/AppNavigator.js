import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScren';
import Form1Screen from './Form1Sreen';
import Form2Screen from './Form2Screen';
import Form3Screen from './Form3Screen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Form1" component={Form1Screen} />
        <Stack.Screen name="Form2" component={Form2Screen} />
        <Stack.Screen name="Form3" component={Form3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
