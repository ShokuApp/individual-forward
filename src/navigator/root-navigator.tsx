import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsStackScreens } from "./restaurants-navigator";
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
        component={RestaurantsStackScreens}
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
