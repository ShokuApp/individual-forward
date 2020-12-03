import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { TabBar } from "./tab-bar";
import ProfileScreen from "../../screens/profile";
import RestaurantsScreen from "../../screens/restaurants";
import { StyleSheet, View } from "react-native";
import RecipesScreen from "../../screens/recipes";
import RecipeDetailsScreen from "../../screens/recipe-details";
import { Recipe } from "../../models";

import { createStackNavigator } from "@react-navigation/stack";

export type RecipesStackParamList = {
  Recipes: undefined;
  RecipeDetails: { recipe: Recipe };
};
const RecipesStack = createStackNavigator<RecipesStackParamList>();

export type RestaurantsStackParamList = {
  Restaurants: undefined;
};
const RestaurantsStack = createStackNavigator<RestaurantsStackParamList>();

const Restaurants = () => {
  return () => (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen
        name={"Restaurants"}
        component={RestaurantsScreen}
        options={{ title: "Restaurants" }}
      />
    </RestaurantsStack.Navigator>
  );
};

const Recipes = () => {
  return () => (
    <RecipesStack.Navigator>
      <RecipesStack.Screen
        name={"Recipes"}
        component={RecipesScreen}
        options={{ title: "Recettes" }}
      />
      <RecipesStack.Screen
        name={"RecipeDetails"}
        component={RecipeDetailsScreen}
        options={{ headerShown: true }}
      />
    </RecipesStack.Navigator>
  );
};

export const BottomTabNavigator = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen name="mapScreen" component={Restaurants()} />
        <Tab.Screen name="recipeScreen" component={Recipes()} />
        <Tab.Screen name="profileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
};
