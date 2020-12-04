import React, { FC } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { RestaurantPreview } from "./restaurant-preview";
import {
  RestaurantBloc,
  RestaurantListEvent,
  RestaurantState,
  RestaurantErrorState,
  RestaurantListState,
} from "../../../blocs";
import { RestaurantRepository } from "../../../repositories";
import { BlocBuilder } from "@felangel/react-bloc";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  restaurantPreviewContainer: {
    width: Dimensions.get("window").width,
    alignItems: "center",
  },
});

export const ListRestaurantPreview: FC = () => {
  const restaurantBloc = new RestaurantBloc(new RestaurantRepository());
  restaurantBloc.add(new RestaurantListEvent());
  return (
    <View style={styles.container}>
      <BlocBuilder
        bloc={restaurantBloc}
        builder={(state: RestaurantState) => {
          if (state instanceof RestaurantErrorState) {
            return <Text>Error</Text>;
          }
          if (state instanceof RestaurantListState) {
            return (
              <View style={styles.container}>
                {state.restaurants.map((restaurant) => {
                  return (
                    <View
                      style={styles.restaurantPreviewContainer}
                      key={restaurant.id}
                    >
                      <RestaurantPreview restaurant={restaurant} />
                    </View>
                  );
                })}
              </View>
            );
          }
          return <Text>Loading</Text>;
        }}
      />
    </View>
  );
};
