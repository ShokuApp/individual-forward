import React, { FC, useEffect, useState } from "react";
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
  onPreviewSelected: {
    latitude: number;
    longitude: number;
  };
  index: number;
};

const MapArea: FC<Props> = (props: Props) => {
  console.log("props: " + props.index);
  const { width, height } = Dimensions.get("window");
  const [centerRegion, setCenterRegion] = useState({
    latitude: 43.6047,
    longitude: 1.4442,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922 * (width / height),
  }); //TOULOUSE COORDINATES

  // useEffect(() => {
  //   console.log
  //   props.onPreviewSelected
  //     ? setCenterRegion({ ...centerRegion, ...props.onPreviewSelected })
  //     : null;
  // });
  const mapRef = React.createRef<MapView>();
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={centerRegion}
        region={centerRegion}
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
              onPress={(e) => {
                setCenterRegion({
                  latitudeDelta: 0,
                  longitudeDelta: 0.006,
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                });
                mapRef.current?.animateToRegion(centerRegion);
                props.onClickMarker(index);
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default MapArea;
