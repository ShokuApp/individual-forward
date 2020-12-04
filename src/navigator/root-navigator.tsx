import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantStack } from "../navigator/restaurant-details-navigator";
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
    </Stack.Navigator>
  );
};
