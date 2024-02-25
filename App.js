import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./src/Screens/Home";
import ProductsByCategory from "./src/Screens/ProductsByCategory";
import { useFonts } from "expo-font";
import { fontCollection } from "./src/utils/globals/fonts";
import ProductDetail from "./src/Screens/ProductDetail";
import { StatusBar } from "expo-status-bar";
import colors from "./src/utils/globals/Color";

const App = () => {
  //asi se usa la libreria
  const [fontsLoaded] = useFonts(fontCollection);

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor={colors.orange2} />
      <Home />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
