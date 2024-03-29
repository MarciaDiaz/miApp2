import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import products from "../utils/data/products.json";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import colors from "../utils/globals/Color";

const ProductDetail = (route) => {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  useEffect(() => {
    const productFinded = products.find((product) => product.id === productId);
    setProduct(productFinded);
  }, [productId]);

  return (
    <View style={styles.container}>
      <Header title="Detalle del producto" />
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{ uri: product?.images ? product.images[0] : null }}
          resizeMode="cover"
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>${product.price}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300,
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25,
  },
  containerPrice: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 30,
  },
  buyNow: {
    backgroundColor: colors.orange3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buyNowText: {
    color: "white",
  },
});
