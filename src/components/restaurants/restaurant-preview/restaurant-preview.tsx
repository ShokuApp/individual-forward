import React, { FC } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Restaurant } from "../../../models";
import { PriceRange } from "./price-range";
import { Location } from "./location";
import { RestaurantType } from "./restaurant-type";
import { Rating } from "./rating";
import { Schedule } from "./schedule";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: (30 * height) / 100,
    width: (85 * width) / 100,
    backgroundColor: "#FFFFFF",
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    borderRadius: 10,
    marginBottom: 5,
    overflow: "hidden",
    elevation: 5,
  },
  image: {
    flexGrow: 1,
  },
  informationContainer: {
    width: "100%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    paddingTop: 5,
    paddingLeft: 8,
    fontSize: 18,
  },
});

type Props = {
  restaurant: Restaurant;
};

export const RestaurantPreview: FC<Props> = ({ restaurant }: Props) => {
  const imageRestaurant = { uri: restaurant.image };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => console.log("Attach display restaurant details method")}
    >
      <Image style={styles.image} source={imageRestaurant} />
      <View style={styles.informationContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Rating rate={restaurant.averageRate} />
        </View>
        <View style={styles.rowContainer}>
          <Location
            streetNumber={restaurant.address.streetNumber}
            street={restaurant.address.street}
            postalCode={restaurant.address.postalCode}
            city={restaurant.address.city}
          />
          <RestaurantType description={restaurant.description} />
        </View>
        <View style={styles.rowContainer}>
          <Schedule openingTimes={restaurant.openingTime} />
          <PriceRange price={restaurant.averagePrice} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
