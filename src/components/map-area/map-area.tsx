import React, { FC, useEffect } from "react";
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
  locations: {
    latitude: number;
    longitude: number;
  }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollRef: any;
  index: number;
};

const MapArea: FC<Props> = (props: Props) => {
  const { width, height } = Dimensions.get("window");

  const mapRef = React.useRef<MapView>(null);

  useEffect(() => {
    props.index !== -1
      ? mapRef.current?.animateToRegion({
          latitudeDelta: 0,
          longitudeDelta: 0.006,
          ...props.locations[props.index],
        })
      : null;
  });

  const scrollToRow: (itemIndex: number) => void = (itemIndex) => {
    props.scrollRef.current?.scrollTo({
      x: itemIndex * width,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 43.6047,
          longitude: 1.4442,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922 * (width / height), //TOULOUSE COORDINATES, FAIRLY ZOOMED
        }}
        showsUserLocation={true}
      >
        {props.locations.map((restaurantLocation, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: restaurantLocation.latitude,
                longitude: restaurantLocation.longitude,
              }}
              onPress={(e) => {
                mapRef.current?.animateToRegion({
                  latitudeDelta: 0,
                  longitudeDelta: 0.006,
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                });
                scrollToRow(index);
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default MapArea;
