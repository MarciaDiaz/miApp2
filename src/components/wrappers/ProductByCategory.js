import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import colors from "../../utils/globals/Color";

const ProductByCategory = ({ item, selectedProductId }) => {
  // Verificar si item es undefined
  if (!item) {
    return null; // o puedes devolver algún otro componente de carga o manejar el caso de error según tu lógica
  }

  return (
    <Pressable
      onPress={() => selectedProductId(item.id)}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{ uri: item.thumbnail }}
        resizeMode="contain"
      />
      <Text
        style={[styles.text, width > 490 ? { fontSize: 24 } : { fontSize: 16 }]}
      >
        {item.id} {item.title}
      </Text>
    </Pressable>
  );
};

export default ProductByCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange2,
    width: "80%",
    marginHorizontal: 10,
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
    width: "30%",
    minWidth: 90,
    minHeight: 90,
  },
});
