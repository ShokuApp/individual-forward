import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { RecipePreview } from "./recipe-preview";
import {
  RecipeBloc,
  RecipeListState,
  RecipeListEvent,
  RecipeState,
  RecipeErrorState,
} from "../../blocs";
import { RecipeRepository } from "../../repositories";
import { BlocBuilder } from "@felangel/react-bloc";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
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

export const ListRecipePreview: FC = () => {
  const recipeBloc = new RecipeBloc(new RecipeRepository());
  recipeBloc.add(new RecipeListEvent());
  return (
    <ScrollView>
      <BlocBuilder
        bloc={recipeBloc}
        builder={(state: RecipeState) => {
          if (state instanceof RecipeErrorState) {
            return <Text>Error</Text>;
          }
          if (state instanceof RecipeListState) {
            return (
              <View style={styles.container}>
                {state.recipes.map((recipe) => {
                  return (
                    <View style={styles.child} key={recipe.id}>
                      <RecipePreview recipe={recipe} />
                    </View>
                  );
                })}
              </View>
            );
          }
          return <Text>Loading</Text>;
        }}
      />
    </ScrollView>
  );
};
