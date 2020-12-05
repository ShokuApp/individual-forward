import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RecipePreview from "./recipe-preview";
import { RecipeBloc, RecipeListEvent } from "../../../blocs";
import { RecipeRepository } from "../../../repositories";
import { ScrollView } from "react-native-gesture-handler";
import { Recipe } from "../../../models";
import { RecipeSearch } from "./search";

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
  text: {
    textAlign: "center",
  },
});

type Props = {
  recipes: Recipe[];
};

export const ListRecipePreview: FC<Props> = (props) => {
  const recipeBloc = new RecipeBloc(new RecipeRepository());
  recipeBloc.add(new RecipeListEvent());

  const [text, setText] = useState("");
  const filteredRecipes = props.recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <ScrollView>
      <RecipeSearch text={text} setText={setText} />
      {filteredRecipes.length ? (
        <View style={styles.container}>
          {filteredRecipes.map((recipe) => {
            return (
              <View style={styles.recipePreviewContainer} key={recipe.id}>
                <RecipePreview recipe={recipe} />
              </View>
            );
          })}
        </View>
      ) : (
        <Text style={styles.text}>No recipe found</Text>
      )}
    </ScrollView>
  );
};
