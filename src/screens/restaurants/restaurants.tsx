import React, { FC } from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Data from "../../../data/restaurants/data.json";
import { ListRestaurantPreview } from "../../components/restaurants/list-restaurant-preview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  previewList: {
    position: "absolute",
    bottom: 0,
  },
});

const getRestaurantsIds: () => string[] = () => {
  const ids: string[] = [];
  Data.map((restaurant) => {
    ids.push(restaurant.id);
  });
  return ids;
};

const RestaurantsScreen: FC = () => {
  const locations = ["44.0181, 1.3558", "43.6047, 1.4442", "43.6092, 1.4463"];
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
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
      <ScrollView
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

export default RestaurantsScreen;
