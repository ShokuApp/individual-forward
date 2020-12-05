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
import { Restaurants } from "../components/restaurants/restaurants";
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
          return <Restaurants restaurantsList={state.restaurants} />;
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

export default RestaurantsScreen;
