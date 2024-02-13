import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../../utils/globals/Color";

const ProductByCategory = (item) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: item.thumbnail }}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        {item.id}
        {item.title}
      </Text>
    </View>
  );
};

export default ProductByCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange2,
    width: "80%",
    marginHorizontal: "10",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    width: "60%",
    fontSize: 16,
  },
  image: {
    width: 90,
    height: 90,
  },
});
