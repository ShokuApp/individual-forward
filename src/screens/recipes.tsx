import React, { FC } from "react";
import Data from "../../data/recipes/data.json";
import { ListRecipePreview } from "../components/recipes/list-recipe-preview";
import { ScrollView } from "react-native";

const getRecipeIds: () => string[] = () => {
  const ids: string[] = [];
  Data.map((recipe) => {
    ids.push(recipe.id);
  });
  return ids;
};

const RecipesScreen: FC = () => {
  return (
    <ScrollView>
      <ListRecipePreview recipes={getRecipeIds()} />
    </ScrollView>
  );
};

export default RecipesScreen;
