import React, { FC } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { ListRestaurantPreview } from "../components/restaurants/restaurant-preview/list-restaurant-preview";
import {
  RestaurantBloc,
  RestaurantErrorState,
  RestaurantListEvent,
  RestaurantListState,
  RestaurantState,
} from "../blocs";
import { RestaurantRepository } from "../repositories";
import { BlocBuilder } from "@felangel/react-bloc";

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

// ! Temporary pending SPAR-259
// ! Related Pull Request: https://github.com/ShokuApp/individual-forward/pull/21
const RestaurantsMap: FC = () => {
  const locations = ["44.0181, 1.3558", "43.6047, 1.4442", "43.6092, 1.4463"];

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 43.6047,
        longitude: 1.4442,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
    >
      {locations.map((restaurant, index) => {
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: Number(restaurant.split(",")[0]),
              longitude: Number(restaurant.split(" ")[1]),
            }}
          />
        );
      })}
    </MapView>
  );
};

const RestaurantsScreen: FC = () => {
  const restaurantBloc = new RestaurantBloc(new RestaurantRepository());

  restaurantBloc.add(new RestaurantListEvent());

  return (
    <BlocBuilder
      bloc={restaurantBloc}
      builder={(state: RestaurantState) => {
        if (state instanceof RestaurantErrorState) {
          return <Text>Error</Text>;
        }

        if (state instanceof RestaurantListState) {
          return (
            <>
              <RestaurantsMap />
              <ListRestaurantPreview restaurants={state.restaurants} />
            </>
          );
        }

        return <Text>Loading...</Text>;
      }}
    />
  );
};

export default RestaurantsScreen;
