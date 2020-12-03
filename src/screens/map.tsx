import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
