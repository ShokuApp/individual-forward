import React, { FC } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Recipe } from "../../../models";

type Props = {
  recipe: Recipe;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const RecipeDetails: FC<Props> = ({ recipe }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(recipe.id)}</Text>
    </View>
  );
};
