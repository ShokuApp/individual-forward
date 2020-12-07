import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeDetailsScreen from "../screens/recipe-details";
import { Recipe } from "../models";

export type RecipesStackParamList = {
  Recipes: undefined;
  RecipeDetails: { recipe: Recipe };
};

const RecipeDetailsStack = createStackNavigator<RecipesStackParamList>();

export const RecipeDetails: FC = () => {
  return (
    <RecipeDetailsStack.Navigator>
      <RecipeDetailsStack.Screen
        name="RecipeDetails"
        component={RecipeDetailsScreen}
        options={{ headerShown: false }}
      />
    </RecipeDetailsStack.Navigator>
  );
};
