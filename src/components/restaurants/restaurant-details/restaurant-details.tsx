import React, { FC } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "../../common";
import { Informations } from "./informations";
import { UserButtons } from "./user-buttons";
import { CardDescription } from "./card-description";
import { ScrollView } from "react-native-gesture-handler";
import { Profile, Restaurant, TimeRange } from "../../../models";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  image: {
    height: height * 0.2,
    backgroundColor: "gray",
  },
  closeIcon: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: height / 14,
    left: width / 15,
  },
  roundedContainer: {
    flexGrow: 1,
    top: -30,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden",
  },
  scrollContainer: {
    height: height * 0.8 + 30,
  },
  title: {
    fontSize: 20,
    color: "#2196F3",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});

type RestaurantDetailsProps = {
  restaurant: Restaurant;
  profile: Profile;
};

export const RestaurantDetails: FC<RestaurantDetailsProps> = ({
  restaurant,
  profile,
}: RestaurantDetailsProps) => {
  const { goBack } = useNavigation();

  const getOpeningTime: (dataOpeningTime: TimeRange[][]) => string = (
    dataOpeningTime: TimeRange[][]
  ) => {
    const now = new Date();
    const date = now.getDay();
    if (dataOpeningTime[date].length === 0) {
      return "Fermé";
    } else if (dataOpeningTime[date].length === 1) {
      return (
        dataOpeningTime[date][0].from.toString() +
        " - " +
        dataOpeningTime[date][0].to.toString()
      );
    } else {
      return (
        dataOpeningTime[date][0].from +
        " - " +
        dataOpeningTime[date][0].to.toString() +
        " | " +
        dataOpeningTime[date][1].from +
        " - " +
        dataOpeningTime[date][1].to.toString()
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <TouchableOpacity style={styles.closeIcon} onPress={() => goBack()}>
        <Icon name="close" type={"antdesign"} size={25} color="white" />
      </TouchableOpacity>
      <View style={styles.roundedContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          <Text style={styles.title}>{restaurant.name}</Text>
          <Informations
            address={
              restaurant.address.streetNumber +
              " " +
              restaurant.address.street +
              " " +
              restaurant.address.postalCode +
              " " +
              restaurant.address.city
            }
            type={restaurant.description}
            hours={getOpeningTime(restaurant.openingTime)}
            note={restaurant.averageRate}
          />
          <Divider width={"80%"} color={"#DADADA"} />
          <UserButtons />
          <CardDescription card={restaurant.card} profile={profile} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
