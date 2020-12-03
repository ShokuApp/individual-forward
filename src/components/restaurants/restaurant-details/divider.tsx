import React, { FC } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: "#DADADA",
    width: width / 1.2,
  },
});

export const Divider: FC = () => {
  return <View style={styles.container} />;
};
