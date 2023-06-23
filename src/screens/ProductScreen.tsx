import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import products from '../data/product'
import {useNavigation} from '@react-navigation/native'

const ProductScreen = () => {

const { navigate }:any = useNavigation();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={{ width: "50%", padding: 1 }}>
          <Pressable onPress={() => navigate('ProductDetail')}>
             <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
         
        </View>

      )}
      numColumns={2}
    >

    </FlatList>
  )
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  }
})

export default ProductScreen