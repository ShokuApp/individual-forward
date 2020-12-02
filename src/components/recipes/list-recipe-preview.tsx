import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { RecipePreview } from "./recipe-preview";
import {
  RecipeBloc,
  RecipeGetEvent,
  RecipeState,
  RecipeLoadingState,
  RecipeErrorState,
  RecipeInitialState,
  RecipeGetState,
} from "../../bloc";
import { RecipeRepository } from "../../repositories";
import { BlocBuilder } from "@felangel/react-bloc";

type Props = {
  recipes: string[];
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  child: {
    flexBasis: "50%",
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
});

export const ListRecipePreview: FC<Props> = ({ recipes }: Props) => {
  return (
    <View style={styles.container}>
      {recipes.map((id) => {
        const recipe = new RecipeBloc(new RecipeRepository());
        recipe.add(new RecipeGetEvent(id));
        return (
          <BlocBuilder
            key={id}
            bloc={recipe}
            builder={(state: RecipeState) => {
              if (state instanceof RecipeErrorState) {
                return <Text>Error</Text>;
              }
              if (state instanceof RecipeInitialState) {
                return <Text>Loading</Text>;
              }
              if (state instanceof RecipeLoadingState) {
                return <Text>Loading</Text>;
              }
              return (
                <View style={styles.child}>
                  <RecipePreview recipe={(state as RecipeGetState).recipe} />
                </View>
              );
            }}
          />
        );
      })}
    </View>
  );
};
