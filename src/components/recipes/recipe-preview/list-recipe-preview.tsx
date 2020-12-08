import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RecipePreview } from "./recipe-preview";
import { ScrollView } from "react-native-gesture-handler";
import { Recipe } from "../../../models";
import { SearchBar } from "../../common";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  listContainer: {
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
  const [text, setText] = useState("");
  const filteredRecipes = props.recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <ScrollView style={styles.container}>
      {filteredRecipes.length ? (
        <View style={styles.listContainer}>
          {filteredRecipes.map((recipe) => {
            return (
              <View style={styles.recipePreviewContainer} key={recipe.id}>
                <RecipePreview recipe={recipe} />
              </View>
            );
          })}
        </View>
      ) : (
        <Text style={styles.text}>Aucune recette trouvée</Text>
      )}
    </ScrollView>
  );
};
