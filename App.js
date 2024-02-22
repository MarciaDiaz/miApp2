import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./src/Screens/Home";
import ProductsByCategory from "./src/Screens/ProductsByCategory";
import { useFonts } from "expo-font";
import { fontCollection } from "./src/utils/globals/fonts";
import ProductDetail from "./src/Screens/ProductDetail";

const App = () => {
  const [categorySelected, setCategorySelected] = useState("");
  //asi se usa la libreria
  const [fontsLoaded] = useFonts(fontCollection);
  const selectedCategoryState = (category) => {
    setCategorySelected(category);
  };
  if (!fontsLoaded) return null;
  const selectedProductId = (id) => {
    selectedProductId(id);
  };
  return (
    <View style={styles.container}>
      {categorySelected ? (
        productId ? (
          <ProductDetail productId={productId} />
        ) : (
          <ProductsByCategory
            selectedProductId={selectedProductId}
            categorySelected={categorySelected}
          />
        )
      ) : (
        <Home selectedCategoryState={selectedCategoryState} />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
