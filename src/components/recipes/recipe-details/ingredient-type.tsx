import { BlocBuilder } from "@felangel/react-bloc";
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
import { IngredientRepository } from "../../../repositories";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  textQuantity: {
    paddingTop: 18,
    fontSize: 14,
    color: "#2196F3",
  },
  textIngredient: {
    fontSize: 14,
    color: "#000000",
  },
  bulletPoint: {
    fontSize: 40,
    color: "#000000",
  },
});

const formatUnity = (recipeIngredient: RecipeIngredient, nbPeople: number) => {
  if (recipeIngredient.quantity === 0) {
    return "";
  }
  if (recipeIngredient.unity === "") {
    return recipeIngredient.quantity * nbPeople;
  }
  return recipeIngredient.quantity * nbPeople + recipeIngredient.unity;
};

const formatIngredient = (recipeIngredient: RecipeIngredient) => {
  if (recipeIngredient.quantity === 0) {
    return recipeIngredient.ingredient.name;
  }
  if (recipeIngredient.unity === "") {
    return " " + recipeIngredient.ingredient.name;
  }
  return " de " + recipeIngredient.ingredient.name;
};

type Props = {
  recipeIngredient: RecipeIngredient;
  nbPeople: number;
};

export const IngredientType: FC<Props> = ({
  recipeIngredient,
  nbPeople,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bulletPoint}>{"\u2022" + " "}</Text>
      <Text style={styles.textQuantity}>
        {formatUnity(recipeIngredient, nbPeople)}
        <Text style={styles.textIngredient}>
          {formatIngredient(recipeIngredient)}
        </Text>
      </Text>
    </View>
  );
};
