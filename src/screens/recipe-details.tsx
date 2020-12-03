import { Route } from "@react-navigation/native";
import React, { FC } from "react";
import Data from "../../data/recipes/data.json";
import { RecipeDetails } from "../components/recipes/recipe-details/recipe-details";
import { Recipe } from "../models";
import { RouteProp } from "@react-navigation/native";
import { RecipesStackParamList } from "../components/bottom-tab-navigator/bottom-tab-navigator";

type RecipeDetailsScreenProps = RouteProp<
  RecipesStackParamList,
  "RecipeDetails"
>;

type Props = {
  route: RecipeDetailsScreenProps;
};

const RecipeDetailsScreen: FC<Props> = ({ route }: Props) => {
  return <RecipeDetails recipe={route.params.recipe} />;
};

export default RecipeDetailsScreen;
