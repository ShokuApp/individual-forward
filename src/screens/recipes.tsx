import React, { FC } from "react";
import Data from "../../data/recipes/data.json";
import ListRecipePreview from "../components/recipes/recipe-preview/list-recipe-preview";
import { ScrollView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
});

const getRecipeIds: () => string[] = () => {
  const ids: string[] = [];
  Data.map((recipe) => {
    ids.push(recipe.id);
  });
  return ids;
};

const RecipesScreen: FC = () => {
  return (
    <ScrollView style={styles.container}>
      <ListRecipePreview recipes={getRecipeIds()} />
    </ScrollView>
  );
};

export default RecipesScreen;
