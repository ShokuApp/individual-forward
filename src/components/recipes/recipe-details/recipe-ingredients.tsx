import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { RecipeIngredient } from "../../../models";
import { IngredientType } from "./ingredient-type";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingLeft: 10,
  },
});

type Props = {
  ingredients: RecipeIngredient[];
  nbPeople: number;
};

export const RecipeIngredients: FC<Props> = ({
  ingredients,
  nbPeople,
}: Props) => {
  return (
    <View style={styles.container}>
      {ingredients.map((recipeIngredient) => {
        return (
          <IngredientType
            recipeIngredient={recipeIngredient}
            nbPeople={nbPeople}
            key={recipeIngredient.id}
          />
        );
      })}
    </View>
  );
};
