import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantStack } from "./restaurant-details-navigator";
import { RecipeDetails } from "./recipe-details-navigator";
import { BottomTabNavigator } from "../components/bottom-tab-navigator";

const Stack = createStackNavigator();

export const RootStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
