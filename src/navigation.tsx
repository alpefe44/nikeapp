import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductScreen from './screens/ProductScreen';
import ProductDetailsScreen from './screens/ProductDetailScreen';
import ShoppingCartUI from './screens/ShoppingCartUI';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ProductScreen' component={ProductScreen}></Stack.Screen>
        <Stack.Screen name='ProductDetail' component={ProductDetailsScreen}></Stack.Screen>
        <Stack.Screen name='Cart' component={ShoppingCartUI} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation