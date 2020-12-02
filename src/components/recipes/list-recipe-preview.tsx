import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { RecipePreview } from "./recipe-preview";
import {
  RecipeBloc,
  RecipeGetEvent,
  RecipeGetState,
  RecipeState,
} from "../../bloc";
import { RecipeRepository } from "../../repositories";
import { BlocBuilder } from "@felangel/react-bloc";

type Props = {
  recipes: string[];
};

export const ListRecipePreview: FC<Props> = ({ recipes }: Props) => {
  return (
    <View>
      {recipes.map((id) => {
        const recipe = new RecipeBloc(new RecipeRepository());
        recipe.add(new RecipeGetEvent(id));
        return (
          <BlocBuilder
            bloc={recipe}
            builder={(state: RecipeState) => {
              if (!(state instanceof RecipeGetState)) {
                return <Text>Loading</Text>;
              }
              return <RecipePreview recipe={state.recipe} />;
            }}
          />
        );
      })}
    </View>
  );
};
