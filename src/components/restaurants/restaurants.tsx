import React, { FC, useState } from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import { MapArea } from "../map-area/map-area";
import { ListRestaurantPreview } from "./restaurant-preview/list-restaurant-preview";
import { Restaurant } from "../../models";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  previewList: {
    position: "absolute",
    bottom: 20,
  },
});

type Props = {
  restaurantsList: Restaurant[];
};

export const Restaurants: FC<Props> = (props: Props) => {
  const width = Dimensions.get("window").width;
  const [index, setIndex] = useState(-1);

  const scrollRef = React.useRef<ScrollView>(null);

  const restaurantLocationList: Array<{
    latitude: number;
    longitude: number;
  }> = [];
  for (const restaurant of props.restaurantsList) {
    restaurantLocationList.push(restaurant.location);
  }

  return (
    <View style={styles.container}>
      <MapArea
        scrollRef={scrollRef}
        locations={restaurantLocationList}
        index={index}
      />
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.previewList}
        disableIntervalMomentum={true}
        onMomentumScrollEnd={(event) => {
          setIndex(Math.round(event.nativeEvent.contentOffset.x / width));
        }}
      >
        <ListRestaurantPreview restaurants={props.restaurantsList} />
      </ScrollView>
    </View>
  );
};
