import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./src/Screens/Home";
import ProductsByCategory from "./src/Screens/ProductsByCategory";
import { useFonts } from "expo-font";
import { fontCollection } from "./src/utils/globals/fonts";

const App = () => {
  const [categorySelected, setCategorySelected] = useState("");
  //asi se usa la libreria
  const [fontsLoaded] = useFonts(fontCollection);
  const selectedCategoryState = (category) => {
    setCategorySelected(category);
  };
  if (!fontsLoaded) return null;
  return (
    <>
      {categorySelected ? (
        <ProductsByCategory categorySelected={categorySelected} />
      ) : (
        <Home selectedCategoryState={selectedCategoryState} />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
