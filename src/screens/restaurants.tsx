import { BlocBuilder } from "@felangel/react-bloc";
import React, { FC } from "react";
import { Text } from "react-native";

import {
  RestaurantBloc,
  RestaurantErrorState,
  RestaurantListEvent,
  RestaurantListState,
  RestaurantState,
} from "../blocs";
import Restaurants from "../components/restaurants/restaurants";
import { Restaurant } from "../models";
import { RestaurantRepository } from "../repositories";

const RestaurantsScreen: FC = () => {
  const restaurantBloc = new RestaurantBloc(new RestaurantRepository());
  restaurantBloc.add(new RestaurantListEvent());
  return (
    <BlocBuilder
      bloc={restaurantBloc}
      builder={(state: RestaurantState) => {
        if (state instanceof RestaurantErrorState) return <Text>Error</Text>;
        if (state instanceof RestaurantListState) {
          const restaurantLocationList: Restaurant["location"][] = [];
          state.restaurants.map((restaurant) => {
            restaurantLocationList.push(restaurant.location);
          });
          return <Restaurants restaurantsList={state.restaurants} />;
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

export default RestaurantsScreen;
