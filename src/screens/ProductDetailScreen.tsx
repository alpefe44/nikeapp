import { StyleSheet, View, Image, FlatList, Dimensions, Text, ScrollView, Pressable } from "react-native";
import products from '../data/product'
import { useNavigation } from '@react-navigation/native'



const ProductDetailsScreen = () => {
  const product = products[1];
  const width = Dimensions.get('screen').width;
  const { navigate }: any = useNavigation();


  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <>
              <Image source={{ uri: item }} style={{ aspectRatio: 1, width: width }}></Image>
              {console.log(item)}
            </>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        {/* Title */}
        <View style={{ padding: 20 , marginBottom:65 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        {/* Navigation icon */}
      </ScrollView >

      <Pressable style={styles.button} onPress={() => navigate('Cart')}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },

  price: {
    fontWeight: "500",
    fontSize: 16,
  },

  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default ProductDetailsScreen;