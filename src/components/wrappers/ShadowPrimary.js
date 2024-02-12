import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Children } from "react/cjs/react.production.min";

const ShadowPrimary = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default ShadowPrimary;

const styles = StyleSheet.create({
  container: {
    elevation: 10,
  },
});
