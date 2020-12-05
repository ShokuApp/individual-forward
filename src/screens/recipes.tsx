import React, { FC } from "react";
import { BlocBuilder } from "@felangel/react-bloc";
import {
  RecipeBloc,
  RecipeErrorState,
  RecipeListEvent,
  RecipeListState,
  RecipeState,
} from "../blocs";
import { RecipeRepository } from "../repositories";
import { Text } from "react-native";
import { ListRecipePreview } from "../components/recipes/list-recipe-preview";

const RecipesScreen: FC = () => {
  const recipeBloc = new RecipeBloc(new RecipeRepository());

  recipeBloc.add(new RecipeListEvent());

  return (
    <BlocBuilder
      bloc={recipeBloc}
      builder={(state: RecipeState) => {
        if (state instanceof RecipeErrorState) {
          return <Text>Error</Text>;
        }

        if (state instanceof RecipeListState) {
          return <ListRecipePreview recipes={state.recipes} />;
        }

        return <Text>Loading...</Text>;
      }}
    />
  );
};

export default RecipesScreen;
