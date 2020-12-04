import React, { FC } from "react";
import { StyleSheet, View, Dimensions, ScrollView, Text } from "react-native";
import MapArea from "../map-area/map-area";
import Data from "../../../data/restaurants/data.json";
import { ListRestaurantPreview } from "./restaurant-preview/list-restaurant-preview";
import {
  RestaurantBloc,
  RestaurantErrorState,
  RestaurantListEvent,
  RestaurantListState,
  RestaurantState,
} from "../../blocs";
import { RestaurantRepository } from "../../repositories";
import { BlocBuilder } from "@felangel/react-bloc";
import { Restaurant } from "../../models";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  previewList: {
    position: "absolute",
    bottom: 0,
  },
});

//TODO: Récupérer tous les restaurants, séparer la location dans une array et l'objet dans une autre
//QUESTION : DONNER LES RESTAURANTS EN PROPS + UN BOOLEAN ISLOADING A LISTRESTAURANTPREVIEW
//POUR QU'IL LE DONNE A RESTAURANTPREVIEW ?  ----> CHANGER FROM STRING[] TO RESTAURANT[],
//ENLEVER LE BLOCK ET JUST MAP SUR L'ARRAY

const getRestaurantsIds: () => string[] = () => {
  const ids: string[] = [];
  Data.map((restaurant) => {
    ids.push(restaurant.id);
  });
  return ids;
};

const Restaurants: FC = () => {
  const restaurantBloc = new RestaurantBloc(new RestaurantRepository());
  restaurantBloc.add(new RestaurantListEvent());

  const scrollRef = React.createRef<ScrollView>();
  const scrollToRow: (itemIndex: number) => void = (itemIndex) => {
    scrollRef.current?.scrollTo({
      x: itemIndex * Dimensions.get("window").width,
    });
  };

  return (
    <View style={styles.container}>
      <BlocBuilder
        bloc={restaurantBloc}
        builder={(state: RestaurantState) => {
          if (state instanceof RestaurantErrorState) return <Text>Error</Text>;
          if (state instanceof RestaurantListState) {
            const restaurantLocationList: Restaurant["location"][] = [];
            state.restaurants.map((restaurant) => {
              restaurantLocationList.push(restaurant.location);
            });
            return (
              <View>
                <MapArea
                  onClickMarker={scrollToRow}
                  locations={restaurantLocationList}
                />
                <ScrollView
                  ref={scrollRef}
                  horizontal={true}
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  style={styles.previewList}
                >
                  <ListRestaurantPreview restaurants={getRestaurantsIds()} />
                </ScrollView>
              </View>
            );
          }
          return <Text>Loading</Text>;
        }}
      />
    </View>
  );
};

export default Restaurants;
