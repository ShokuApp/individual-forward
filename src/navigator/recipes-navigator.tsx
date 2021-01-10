import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeDetailsScreen from "../screens/recipes/recipe-details";
import { Recipe } from "../models";
import { Icon } from "react-native-elements";
import SearchRecipesScreen from "../screens/recipes/search-recipes";

export type RecipesStackParamList = {
  RecipeDetails: { recipe: Recipe };
  SearchRecipes: undefined;
};

const RecipesStack = createStackNavigator<RecipesStackParamList>();

export const RecipesStackScreen: FC = () => {
  return (
    <RecipesStack.Navigator>
      <RecipesStack.Screen
        name="RecipeDetails"
        component={RecipeDetailsScreen}
        options={{ headerShown: false }}
      />
      <RecipesStack.Screen
        name="SearchRecipes"
        component={SearchRecipesScreen}
        options={{
          title: "Recherche",
          headerTintColor: "white",
          headerBackTitle: "Recettes",
          headerStyle: {
            backgroundColor: "#2196F3",
          },
          headerBackTitleStyle: { color: "white" },
          headerBackImage: () => (
            <Icon
              type="entypo"
              name="chevron-small-left"
              color="white"
              size={24}
            />
          ),
        }}
      />
    </RecipesStack.Navigator>
  );
};
