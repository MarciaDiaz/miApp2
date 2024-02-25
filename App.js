import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./src/Screens/Home";
import ProductsByCategory from "./src/Screens/ProductsByCategory";
import { useFonts } from "expo-font";
import { fontCollection } from "./src/utils/globals/fonts";
import ProductDetail from "./src/Screens/ProductDetail";
import { StatusBar } from "expo-status-bar";
import colors from "./src/utils/globals/Color";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  //asi se usa la libreria
  const [fontsLoaded] = useFonts(fontCollection);

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor={colors.orange2} />
      <NavigationContainer />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ProductsByCategory"
          component={ProductsByCategory}
        />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
      <NavigationContainer />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
