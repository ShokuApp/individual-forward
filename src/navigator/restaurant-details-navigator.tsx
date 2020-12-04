import React, { FC } from "react";
import { Restaurant } from "../models";
import RestaurantDetailsScreen from "../screens/restaurants/restaurant-details";
import { createStackNavigator } from "@react-navigation/stack";

export type RestaurantStackParamList = {
  RestaurantDetailsScreen: { restaurant: Restaurant };
};

const RestaurantDetailsStack = createStackNavigator<RestaurantStackParamList>();

export const RestaurantStack: FC = () => {
  return (
    <RestaurantDetailsStack.Navigator>
      <RestaurantDetailsStack.Screen
        name={"RestaurantDetailsScreen"}
        component={RestaurantDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </RestaurantDetailsStack.Navigator>
  );
};
