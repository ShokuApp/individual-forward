import React, { FC } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import { Recipe, RecipeIngredient, Ingredient } from "../../../models";
import { IngredientType } from "./ingredient-type";

const { width, height } = Dimensions.get("window");

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
