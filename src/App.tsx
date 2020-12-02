import React from "react";
import { registerRootComponent } from "expo";
import { ListRecipePreview } from "./components/recipes/list-recipe-preview";
import Data from "../data/recipes/data.json";

const getRecipeIds: () => string[] = () => {
  const ids: string[] = [];
  Data.map((recipe) => {
    ids.push(recipe.id);
  });
  return ids;
};

function App() {
  return <ListRecipePreview recipes={getRecipeIds()} />;
}

export default registerRootComponent(App);
