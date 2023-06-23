import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'

const ShoppingCartUI = () => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) =>
        (
          <>
            <CartListItem cartItem={item}></CartListItem>
            {console.log(item)}

          </>
        )}
        ListFooterComponent={() => (

          <View style={styles.totalsContainer}>
            <View style={styles.row}>
              <Text style={styles.text}>Subtotal</Text>
              <Text style={styles.text}>410 TL</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.text}>Delivery</Text>
              <Text style={styles.text}>10 TL</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.text}>Total</Text>
              <Text style={styles.text}>420 TL</Text>
            </View>
          </View>



        )}
      >
      </FlatList>
      <Pressable style={styles.buyButton}>
        <Text style={{ color: 'white', fontSize: 20 }}>Buy</Text>
      </Pressable>
    </>
  )
}


const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    padding: 20,
    borderTopWidth: 1,
    borderColor: 'gray'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  text: {
    fontSize: 16,
    color: 'gray'
  },
  buyButton: {
    padding: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 100,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30

  }
})

export default ShoppingCartUI