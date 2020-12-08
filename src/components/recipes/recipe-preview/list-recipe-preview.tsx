import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RecipePreview } from "./recipe-preview";
import { ScrollView } from "react-native-gesture-handler";
import { Recipe } from "../../../models";
import { Filters } from "../../bottom-tab-navigator/bottom-tab-navigator";

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
  filters: Filters;
};

const filterRecipes: (recipes: Recipe[], filters?: Filters) => Recipe[] = (
  recipes: Recipe[],
  filters?: Filters
) => {
  let filteredRecipes: Recipe[] = recipes;
  if (!filters) return recipes;
  if (filters.label) {
    filteredRecipes = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(filters.label.toLowerCase());
    });
  }
  filteredRecipes = filteredRecipes.filter((recipe) => {
    return (
      recipe.ingredients.find((recipeIngredient) => {
        for (const allergen of filters.allergens) {
          if (recipeIngredient.ingredient.allergens.includes(allergen)) {
            return true;
          }
        }
      }) === undefined
    );
  });
  return filteredRecipes;
};

export const ListRecipePreview: FC<Props> = (props: Props) => {
  const filteredRecipes = filterRecipes(props.recipes, props.filters);
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
