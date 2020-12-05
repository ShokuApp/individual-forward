import React, { FC } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { RestaurantPreview } from "./restaurant-preview";
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

export const ListRestaurantPreview: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      {props.restaurants.map((restaurant) => {
        return (
          <View style={styles.restaurantPreviewContainer} key={restaurant.id}>
            <RestaurantPreview restaurant={restaurant} />
          </View>
        );
      })}
    </View>
  );
};
