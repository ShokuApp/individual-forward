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
  locations: string[];
};

const MapArea: FC<Props> = (props: Props) => {
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
          // use props.locations
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: Number(restaurant.split(",")[0]),
                longitude: Number(restaurant.split(" ")[1]),
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
