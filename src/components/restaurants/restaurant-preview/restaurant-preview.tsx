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
    height: (30 * height) / 100,
    minHeight: 250,
    width: (83.73 * width) / 100,
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 5,
  },
  viewContainer: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  viewCard: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: "60%",
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    paddingTop: 5,
    paddingLeft: 8,
    fontSize: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
      <View style={styles.viewContainer}>
        <Image style={styles.image} source={imageRestaurant} />
        <View style={styles.viewCard}>
          <View style={styles.view}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Rating rate={restaurant.averageRate} />
          </View>
          <View style={styles.view}>
            <Location
              streetNumber={restaurant.address.streetNumber}
              street={restaurant.address.street}
              postalCode={restaurant.address.postalCode}
              city={restaurant.address.city}
            />
            <RestaurantType description={restaurant.description} />
          </View>
          <View style={styles.view}>
            <Schedule openingTimes={restaurant.openingTime} />
            <PriceRange price={restaurant.averagePrice} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
