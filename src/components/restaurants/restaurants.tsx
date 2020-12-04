import React, { FC } from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import MapArea from "../map-area/map-area";
import Data from "../../../data/restaurants/data.json";
import { ListRestaurantPreview } from "./list-restaurant-preview";

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
  const scrollRef = React.createRef<ScrollView>(); // has type React.RefObject<ScrollView>
  const scrollToRow: (itemIndex: number) => void = (itemIndex) => {
    scrollRef.current?.scrollTo({
      x: itemIndex * Dimensions.get("window").width,
    });
  };

  return (
    <View style={styles.container}>
      <MapArea onClickMarker={scrollToRow} locations={getRestaurantsIds()} />
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
};

export default Restaurants;
