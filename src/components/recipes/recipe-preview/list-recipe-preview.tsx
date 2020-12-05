import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import RecipePreview from "./recipe-preview";
import { RecipeBloc, RecipeListEvent } from "../../../blocs";
import { RecipeRepository } from "../../../repositories";
import { ScrollView } from "react-native-gesture-handler";
import { Recipe } from "../../../models";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  recipePreviewContainer: {
    flexBasis: "50%",
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
});

type Props = {
  recipes: Recipe[];
};

export const ListRecipePreview: FC<Props> = (props) => {
  const recipeBloc = new RecipeBloc(new RecipeRepository());
  recipeBloc.add(new RecipeListEvent());
  return (
    <ScrollView>
      <View style={styles.container}>
        {props.recipes.map((recipe) => {
          return (
            <View style={styles.recipePreviewContainer} key={recipe.id}>
              <RecipePreview recipe={recipe} />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
