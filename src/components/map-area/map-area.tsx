import React, { FC, useEffect } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

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
  locations: Array<{
    latitude: number;
    longitude: number;
  }>;
  scrollRef: React.RefObject<ScrollView>;
  index: number;
};

export const MapArea: FC<Props> = (props: Props) => {
  const { width, height } = Dimensions.get("window");

  const mapRef = React.useRef<MapView>(null);

  useEffect(() => {
    props.index !== -1
      ? mapRef.current?.animateToRegion(
          {
            latitudeDelta: 0,
            longitudeDelta: 0.006,
            ...props.locations[props.index],
          },
          350
        )
      : null;
  }, [props.index]);

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
                mapRef.current?.animateToRegion(
                  {
                    latitudeDelta: 0,
                    longitudeDelta: 0.006,
                    latitude: e.nativeEvent.coordinate.latitude,
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
    </View>
  );
};
