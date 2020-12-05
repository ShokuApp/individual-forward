import React, { FC } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { RestaurantPreview } from "./restaurant-preview";
import { Restaurant } from "../../../models";

const styles = StyleSheet.create({
  scrollContainer: {
    position: "absolute",
    bottom: 25,
  },
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
