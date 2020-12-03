import React, { FC } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { Restaurant, TimeRange } from "../../models";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: (32.76 * height) / 100,
    width: (83.73 * width) / 100,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 10,
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
  iconRate: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 5,
  },
  iconText: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 10,
  },
  iconPrice: {
    paddingTop: 2,
  },
  iconLocation: {
    paddingRight: 2,
    paddingLeft: 8,
    paddingTop: 5,
  },
  iconRestaurant: {
    paddingRight: 7,
    paddingLeft: 5,
    paddingTop: 5,
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewPrice: {
    paddingRight: 8,
    paddingLeft: 5,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paragraph: {
    paddingTop: 10,
    paddingLeft: 5,
    marginBottom: 0,
    fontSize: 10,
  },
  adress: {
    paddingTop: 0,
    paddingLeft: 5,
    marginBottom: 0,
    fontSize: 10,
  },
  openingTime: {
    paddingTop: 0,
    paddingLeft: 0,
    marginBottom: 0,
    fontSize: 10,
  },
  textRight: {
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textLeft: {
    paddingTop: 5,
    paddingRight: 2,
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textMark: {
    paddingTop: 5,
    fontSize: 10,
    color: "#2196F3",
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

const getOpeningTime = (dataOpeningTime: TimeRange[][]) => {
  const now = new Date();
  const date = now.getDay();
  if (dataOpeningTime[date].length === 0) {
    return <Text style={styles.textRight}>Fermé</Text>;
  } else if (dataOpeningTime[date].length === 1) {
    return (
      <Text style={styles.textRight}>
        {dataOpeningTime[date][0].from + " - " + dataOpeningTime[date][0].to}
      </Text>
    );
  } else {
    return (
      <View style={styles.paragraph}>
        <Text style={styles.openingTime}>
          {dataOpeningTime[date][0].from + " - " + dataOpeningTime[date][0].to}
        </Text>
        <Text style={styles.openingTime}>
          {dataOpeningTime[date][1].from + " - " + dataOpeningTime[date][1].to}
        </Text>
      </View>
    );
  }
};

const getPriceRange = (price: number) => {
  let numberIcons;
  if (price < 15) {
    numberIcons = 1;
  } else if (price < 30) {
    numberIcons = 2;
  } else {
    numberIcons = 3;
  }
  const icons = [];
  for (let i = 0; i < numberIcons; i++) {
    icons.push(
      <Icon
        key={i}
        name="euro-symbol"
        type="material-icons"
        color="#000000"
        size={20}
        style={styles.iconPrice}
      />
    );
  }
  return <View style={styles.viewPrice}>{icons}</View>;
};

type Props = {
  restaurant: Restaurant;
};

export const RestaurantPreview: FC<Props> = ({ restaurant }: Props) => {
  const imageRestaurant = { uri: restaurant.image };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log("Attach display restaurant details method")}
    >
      <View style={styles.viewContainer}>
        <Image style={styles.image} source={imageRestaurant} />
        <View style={styles.viewCard}>
          <View style={styles.view}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <View style={styles.view}>
              <Text style={styles.textMark}>{restaurant.average_rate}</Text>
              <Icon
                name="star"
                type="font-awesome"
                color="#2196F3"
                size={20}
                style={styles.iconRate}
              />
            </View>
          </View>
          <View style={styles.view}>
            <View style={styles.view}>
              <Icon
                name="map-marker"
                type="font-awesome"
                color="#000000"
                size={25}
                style={styles.iconLocation}
              />
              <View style={styles.paragraph}>
                <Text style={styles.adress}>
                  {restaurant.house_number} {} {restaurant.street}
                </Text>
                <Text style={styles.adress}>
                  {restaurant.postal_code} {}
                  {restaurant.city}
                </Text>
              </View>
            </View>
            <View style={styles.view}>
              <Text style={styles.textLeft}>{restaurant.description}</Text>
              <Icon
                name="local-dining"
                type="material-icon"
                color="#000000"
                size={20}
                style={styles.iconRestaurant}
              />
            </View>
          </View>
          <View style={styles.view}>
            <View style={styles.view}>
              <Icon
                name="clock"
                type="feather"
                color="#000000"
                size={20}
                style={styles.iconText}
              />
              {getOpeningTime(restaurant.opening_time)}
            </View>
            {getPriceRange(Number(restaurant.average_price.slice(0, -1)))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
