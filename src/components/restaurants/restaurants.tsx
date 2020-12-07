import React, { FC, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { MapArea } from "./restaurant-map/map-area";
import { ListRestaurantPreview } from "./restaurant-preview/list-restaurant-preview";
import { Dish, Restaurant } from "../../models";
import { Filters } from "../bottom-tab-navigator";
import { restaurantPriceRange } from "../../helpers/restaurants/average-price";
import { SEARCH_BY } from "./search-restaurants/search-by";
import { cardAllDishes } from "../../helpers/cards/all-dishes";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  previewList: {
    position: "absolute",
    bottom: 20,
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
    const price = restaurantPriceRange(restaurant.averagePrice);
    return Object.values(filters.price)[price - 1];
  });
  if (filters.label && filters.searchBy === SEARCH_BY.RESTAURANT) {
    filteredRestaurants = filteredRestaurants.filter((restaurant) => {
      return restaurant.name
        .toLowerCase()
        .includes(filters.label.toLowerCase());
    });
  }
  filteredRestaurants = filteredRestaurants.filter((restaurant) => {
    const allDishes = cardAllDishes(restaurant.card);
    let filteredDishes: Dish[] = allDishes;
    if (filters.label && filters.searchBy === SEARCH_BY.RECIPE) {
      filteredDishes = allDishes.filter((dish) => {
        return dish.name.toLowerCase().includes(filters.label.toLowerCase());
      });
    }
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

export const Restaurants: FC<Props> = (props: Props) => {
  const [index, setIndex] = useState(-1);
  const filteredRestaurants = filterRestaurants(
    props.restaurants,
    props.filters
  );
  const scrollRef = React.useRef<ScrollView>(null);

  const restaurantLocations = filteredRestaurants.map(
    (restaurant) => restaurant.location
  );

  return (
    <View style={styles.container}>
      <MapArea
        scrollRef={scrollRef}
        locations={restaurantLocations}
        index={index}
      />
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.previewList}
        disableIntervalMomentum={true}
        onMomentumScrollEnd={(event) => {
          setIndex(Math.round(event.nativeEvent.contentOffset.x / width));
        }}
      >
        <ListRestaurantPreview restaurants={filteredRestaurants} />
      </ScrollView>
    </View>
  );
};
