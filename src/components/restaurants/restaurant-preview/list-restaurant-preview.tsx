import React, { FC, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import RestaurantPreview from "./restaurant-preview";
import { Restaurant } from "../../../models";
import { Filters } from "../../bottom-tab-navigator/bottom-tab-navigator";
import { useIsFocused } from "@react-navigation/native";
import { averagePrice } from "../../../helpers/restaurants/average-price";
import { restaurantAllDishes } from "../../../helpers/restaurants/all-dishes";

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
  filters: Filters;
};

const filterRestaurants: (
  restaurants: Restaurant[],
  filters?: Filters
) => Restaurant[] = (restaurants: Restaurant[], filters?: Filters) => {
  if (!filters) return restaurants;
  let filteredRestaurants = restaurants.filter((restaurant) => {
    const price = averagePrice(restaurant.averagePrice);
    if (price === 1 && filters.price.lowPrice) return true;
    if (price === 2 && filters.price.middlePrice) return true;
    if (price === 3 && filters.price.highPrice) return true;
    return false;
  });
  filteredRestaurants = filteredRestaurants.filter((restaurant) => {
    const allDishes = restaurantAllDishes(restaurant.card);
    let filteredDishes = allDishes.filter((dish) => {
      return dish.name.toLowerCase().includes(filters.label.toLowerCase());
    });
    filteredDishes = filteredDishes.filter((dish) => {
      return (
        dish.ingredients.find((ingredient) => {
          for (const allergen of filters.allergens) {
            if (ingredient.allergens.includes(allergen)) {
              return true;
            }
          }
        }) === undefined
      );
    });
    return filteredDishes.length > 0;
  });
  return filteredRestaurants;
};

export const ListRestaurantPreview: FC<Props> = (props: Props) => {
  const filteredRestaurants = filterRestaurants(
    props.restaurants,
    props.filters
  );
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      <View style={styles.container}>
        {filteredRestaurants.map((restaurant) => {
          return (
            <View style={styles.restaurantPreviewContainer} key={restaurant.id}>
              <RestaurantPreview restaurant={restaurant} />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
