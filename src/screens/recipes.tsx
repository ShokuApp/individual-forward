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
import { v4 as uuid } from "uuid";
import { ListRecipePreview } from "../components/recipes/recipe-preview/list-recipe-preview";
import { RecipesStackParamList } from "../navigator/recipes-navigator";
import { RouteProp } from "@react-navigation/native";
import { RecipesStackParamsList } from "../components/bottom-tab-navigator";

type RecipeScreenProps = RouteProp<RecipesStackParamsList, "Recipes">;

type Props = {
  route: RecipeScreenProps;
};

const RecipesScreen: FC<Props> = ({ route }: Props) => {
  const recipeBloc = new RecipeBloc(new RecipeRepository());

  recipeBloc.add(new RecipeListEvent());

  return (
    <BlocBuilder
      key={uuid()}
      bloc={recipeBloc}
      builder={(state: RecipeState) => {
        if (state instanceof RecipeErrorState) {
          return <Text>Error</Text>;
        }

        if (state instanceof RecipeListState) {
          return (
            <ListRecipePreview
              recipes={state.recipes}
              filters={route.params?.filters}
            />
          );
        }

        return <Text>Loading...</Text>;
      }}
    />
  );
};

export default RecipesScreen;
