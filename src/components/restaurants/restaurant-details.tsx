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
  },
  closeIcon: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
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
    </View>
  );
};

export default RestaurantDetails;
