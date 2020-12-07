import React, { FC } from "react";
import { Text } from "react-native";
import {
  RestaurantBloc,
  RestaurantErrorState,
  RestaurantListEvent,
  RestaurantListState,
  RestaurantState,
} from "../../blocs";
import { RestaurantRepository } from "../../repositories";
import { BlocBuilder } from "@felangel/react-bloc";
import { RestaurantsStackParamsList } from "../../components/bottom-tab-navigator";
import { RouteProp } from "@react-navigation/native";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { Restaurants } from "../../components/restaurants/restaurants";

type RestaurantScreenProps = RouteProp<
  RestaurantsStackParamsList,
  "Restaurants"
>;

type Props = {
  route: RestaurantScreenProps;
};

const RestaurantsScreen: FC<Props> = ({ route }: Props) => {
  const restaurantBloc = new RestaurantBloc(new RestaurantRepository());
  restaurantBloc.add(new RestaurantListEvent());

  return (
    <BlocBuilder
      key={uuid()}
      bloc={restaurantBloc}
      builder={(state: RestaurantState) => {
        if (state instanceof RestaurantErrorState) {
          return <Text>Error</Text>;
        }

        if (state instanceof RestaurantListState) {
          return (
            <Restaurants
              restaurants={state.restaurants}
              filters={route.params?.filters}
            />
          );
        }

        return <Text>Loading...</Text>;
      }}
    />
  );
};

export default RestaurantsScreen;
