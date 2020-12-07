import React, { FC } from "react";
import RestaurantDetailsScreen from "../screens/restaurants/restaurant-details";
import { createStackNavigator } from "@react-navigation/stack";
import SearchRestaurantScreen from "../screens/restaurants/search-restaurants";

const RestaurantsStack = createStackNavigator();

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
