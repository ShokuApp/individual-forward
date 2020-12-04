import React, { FC } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { RestaurantPreview } from "./restaurant-preview";
import {
  RestaurantBloc,
  RestaurantGetEvent,
  RestaurantState,
  RestaurantLoadingState,
  RestaurantErrorState,
  RestaurantInitialState,
  RestaurantGetState,
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

type Props = {
  restaurants: string[];
};

export const ListRestaurantPreview: FC<Props> = ({ restaurants }: Props) => {
  return (
    <View style={styles.container}>
      {restaurants.map((id) => {
        const restaurant = new RestaurantBloc(new RestaurantRepository());
        restaurant.add(new RestaurantGetEvent(id));
        return (
          <BlocBuilder
            key={id}
            bloc={restaurant}
            builder={(state: RestaurantState) => {
              if (state instanceof RestaurantErrorState) {
                return <Text>Error</Text>;
              }
              if (state instanceof RestaurantInitialState) {
                return <Text>Loading</Text>;
              }
              if (state instanceof RestaurantLoadingState) {
                return <Text>Loading</Text>;
              }
              return (
                <View style={styles.restaurantPreviewContainer}>
                  <RestaurantPreview
                    restaurant={(state as RestaurantGetState).restaurant}
                  />
                </View>
              );
            }}
          />
        );
      })}
    </View>
  );
};
