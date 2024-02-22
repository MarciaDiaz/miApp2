import { StyleSheet, Text, View } from "react-native";
import products from "../utils/data/products.json";
import { useEffect, useState } from "react";

const ProductDetail = (productId) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const productFinded = products.find((product) => product.id === productId);
  }, [productId]);

  return (
    <View>
      <Text>{productId}</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
