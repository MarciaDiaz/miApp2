import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ShadowPrimary from "./wrappers/ShadowPrimary";
import colors from "../utils/globals/Color";

const CardCategories = ({ item }) => {
  return (
    <ShadowPrimary style={styles.container}>
      <Text style={styles.Text}>{item}</Text>
    </ShadowPrimary>
  );
};

export default CardCategories;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginHorizontal: "10%",
    alignItems: "center",
    marginVertical: 10,
    padding: 20,
    backgroundColor: colors.primary,
  },
  Text: {
    fontSize: 16,
  },
});
