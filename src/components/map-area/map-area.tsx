import React, { FC } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

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

type Props = {
  onClickMarker(itemIndex: number): void;
  locations: {
    latitude: number;
    longitude: number;
  }[];
};

const MapArea: FC<Props> = (props: Props) => {
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
        {props.locations.map((restaurantLocation, index) => {
          // use props.locations
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: restaurantLocation.latitude,
                longitude: restaurantLocation.longitude,
              }}
              onPress={() => props.onClickMarker(index)}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default MapArea;
