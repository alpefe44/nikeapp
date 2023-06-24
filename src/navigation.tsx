import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductScreen from './screens/ProductScreen';
import ProductDetailsScreen from './screens/ProductDetailScreen';
import ShoppingCartUI from './screens/ShoppingCartUI';
import { FontAwesome5 } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ProductScreen' component={ProductScreen} options={({navigation})=>({
          headerRight: () => <Pressable onPress={() => navigation.navigate('Cart')}><FontAwesome5 name='shopping-cart' size={18} color='gray'>
            <Text>1</Text>
          </FontAwesome5></Pressable>
        })}></Stack.Screen>
        <Stack.Screen name='ProductDetail' component={ProductDetailsScreen} options={{ presentation: 'card' }}></Stack.Screen>
        <Stack.Screen name='Cart' component={ShoppingCartUI} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation