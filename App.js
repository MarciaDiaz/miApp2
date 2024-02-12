import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./src/Screens/Home";
import ProductsByCategory from "./src/Screens/ProductsByCategory";

const App = () => {
  const [categorySelected, setCategorySelected] = useState("");

  const selectedCategoryState = (category) => {
    setCategorySelected(category);
  };

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
