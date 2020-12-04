import React, { FC } from "react";
import { ListRecipePreview } from "../components/recipes/list-recipe-preview";
import { ScrollView } from "react-native";

const RecipesScreen: FC = () => {
  return (
    <ScrollView>
      <ListRecipePreview />
    </ScrollView>
  );
};

export default RecipesScreen;
