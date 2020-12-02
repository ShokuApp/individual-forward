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

const styles = StyleSheet.create({
  box: {
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
    <View style={styles.box}>
      {recipes.map((id) => {
        const recipe = new RecipeBloc(new RecipeRepository());
        recipe.add(new RecipeGetEvent(id));
        return (
          <BlocBuilder
            key={id}
            bloc={recipe}
            builder={(state: RecipeState) => {
              if (!(state instanceof RecipeGetState)) {
                return <Text>Loading</Text>;
              }
              return (
                <View style={styles.child}>
                  <RecipePreview recipe={state.recipe} />
                </View>
              );
            }}
          />
        );
      })}
    </View>
  );
};
