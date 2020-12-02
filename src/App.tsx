import React from "react";
import { registerRootComponent } from "expo";
import { RecipePreview } from "./components/recipes/recipe-preview";

function App() {
  return <RecipePreview />;
}

export default registerRootComponent(App);
