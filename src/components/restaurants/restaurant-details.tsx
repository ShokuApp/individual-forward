import React, { FC } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Restaurant } from "../../models";
import { Icon } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

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
    height: height / 20,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#2196F3",
    fontWeight: "bold",
  },
  informationsContainer: {
    backgroundColor: "gray",
    height: height / 10,
    width: width / 1.2,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

type Props = {};

const RestaurantDetails: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <View style={styles.closeIcon}>
        <AntDesign name="close" size={25} color="white" />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Restaurant Les 2 Font La Paire</Text>
        </View>
        <View style={styles.informationsContainer}>
          <Text>Adresse</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantDetails;
