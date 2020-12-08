import React, { FC } from "react";
import { RecipeDetails } from "../components/recipes/recipe-details/recipe-details";
import { RouteProp } from "@react-navigation/native";
import { RecipesStackParamList } from "../navigator/recipes-navigator";

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
