import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ShadowPrimary from "./wrappers/ShadowPrimary";
import colors from "../utils/globals/Color";

const CardCategories = ({ item, selectedCategoryState }) => {
  return (
    <Pressable onPress={() => selectedCategoryState(item)}>
      <ShadowPrimary style={styles.container}>
        <Text style={styles.text}>{item}</Text>
      </ShadowPrimary>
    </Pressable>
  );
};

export default CardCategories;

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
});
