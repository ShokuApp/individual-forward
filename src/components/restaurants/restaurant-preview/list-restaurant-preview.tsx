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
import { Restaurant } from "../../../models";

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
  restaurants: Restaurant[];
};

export const ListRestaurantPreview: FC<Props> = ({ restaurants }: Props) => {
  return (
    <View style={styles.container}>
      {restaurants.map((restaurant, index) => {
        return (
          <View style={styles.restaurantPreviewContainer} key={index}>
            <RestaurantPreview restaurant={restaurant} />
          </View>
        );
      })}
    </View>
  );
};
