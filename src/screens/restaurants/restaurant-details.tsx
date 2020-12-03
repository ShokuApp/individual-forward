import React, { FC } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import {
  Informations,
  Divider,
} from "../../components/restaurants/restaurant-details";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
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
    top: height / 11,
    left: width / 15,
  },
  detailsContainer: {
    top: -30,
    backgroundColor: "white",
    height: height,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
  },
  titleContainer: {
    height: height / 17,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "#2196F3",
    fontWeight: "bold",
  },
});

type RestaurantDetailsProps = {};

const RestaurantDetails: FC<RestaurantDetailsProps> = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.image} />
      <View style={styles.closeIcon}>
        <AntDesign name="close" size={25} color="white" />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Restaurant Les 2 Font La Paire</Text>
        </View>
        <Informations
          address={"11 Grande Rue Nazareth 31000 Toulouse"}
          type={"Brasserie"}
          note={4}
        />
        <Divider />
      </View>
    </ScrollView>
  );
};

const RestaurantDetailsScreen: FC = () => {
  return <RestaurantDetails />;
};

export default RestaurantDetailsScreen;
