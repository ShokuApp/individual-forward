import React, { FC } from "react";
import { Restaurant } from "../models";
import RestaurantDetailsScreen from "../screens/restaurants/restaurant-details";
import { createStackNavigator } from "@react-navigation/stack";
import SearchRestaurantScreen from "../screens/restaurants/search-restaurants";

export type RestaurantStackParamList = {
  RestaurantDetailsScreen: { restaurant: Restaurant };
  SearchRestaurants: undefined;
};

const RestaurantsStack = createStackNavigator<RestaurantStackParamList>();

export const RestaurantsStackScreens: FC = () => {
  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen
        name={"RestaurantDetailsScreen"}
        component={RestaurantDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <RestaurantsStack.Screen
        name="SearchRestaurants"
        component={SearchRestaurantScreen}
        options={{ title: "Recherche" }}
      />
    </RestaurantsStack.Navigator>
  );
};
