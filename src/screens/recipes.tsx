import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from '../constants/colors';


export const RecipesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Recipes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeStandard,
    alignItems: "center",
    justifyContent: "center",
  },
});