import React, { FC, useEffect, RefObject, useRef } from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
});

const mapStyle = [
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.medical",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.sports_complex",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

type Props = {
  locations: Array<{
    latitude: number;
    longitude: number;
  }>;
  scrollRef: RefObject<ScrollView>;
  index: number;
};

export const MapArea: FC<Props> = (props: Props) => {
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (props.index !== -1) {
      mapRef.current?.animateToRegion(
        {
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
          latitude: props.locations[props.index].latitude - 0.001,
          longitude: props.locations[props.index].longitude,
        },
        350
      );
    }
  }, [props.index]);

  const scrollToRow: (itemIndex: number) => void = (itemIndex) => {
    props.scrollRef.current?.scrollTo({
      x: itemIndex * width,
    });
  };

  return (
    <MapView
      ref={mapRef}
      customMapStyle={mapStyle}
      style={styles.container}
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
              mapRef.current?.animateToRegion(
                {
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                  latitude: e.nativeEvent.coordinate.latitude - 0.001,
                  longitude: e.nativeEvent.coordinate.longitude,
                },
                390
              );
              scrollToRow(index);
            }}
          />
        );
      })}
    </MapView>
  );
};
