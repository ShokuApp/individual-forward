import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import '../models/restaurant'
import { Restaurant } from "../models/restaurant";


type Props = {
  restaurants: Restaurant[]
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const MapScreen = ({ restaurants }: Props) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} provider={PROVIDER_GOOGLE}>
        {restaurants ? restaurants.map((restaurant, index) => {
          const coordinates = restaurant.location;
          return (
            <Marker
              key={index}
              coordinate={{ latitude: Number(coordinates.split(',')[0]), longitude: Number(coordinates.split(' ')[1]) }}
            />
          )
        }) : null}
      </MapView>
    </View>
  );
};

export default (MapScreen);