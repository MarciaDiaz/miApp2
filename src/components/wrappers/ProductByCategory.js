import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductByCategory = (item) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {item.id}
        {item.title}
      </Text>
    </View>
  );
};

export default ProductByCategory;

const styles = StyleSheet.create({});
