import React, { FC } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card } from "../../../models/card";
import { EvilIcons } from "@expo/vector-icons";
import { DishCard } from "./dish-card";
import { MenuCard } from "./menu-card";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ECECEC",
    alignItems: "center",
  },
  headerContainer: {
    height: "5%",
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2196F3",
  },
  filterContainer: {
    flexDirection: "row",
  },
  filtreLabel: {
    color: "#2196F3",
    fontSize: 14,
  },
});

type Props = {
  card: Card;
};

export const CardDescription: FC<Props> = ({ card }: Props) => {
  const starters = card.dishes.filter((dish) => dish.type === "starter");
  const plates = card.dishes.filter((dish) => dish.type === "plate");
  const desserts = card.dishes.filter((dish) => dish.type === "dessert");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Pour moi</Text>
        <TouchableOpacity
          style={styles.filterContainer}
          onPress={() => alert("Todo!")}
        >
          <Text style={styles.filtreLabel}>Voir la carte</Text>
          <EvilIcons name="chevron-right" size={24} color="#2196F3" />
        </TouchableOpacity>
      </View>
      {starters.length !== 0 ? (
        <DishCard category={"Entrées"} dishes={starters} />
      ) : null}
      {plates.length !== 0 ? (
        <DishCard category={"Plats"} dishes={plates} />
      ) : null}
      {desserts.length !== 0 ? (
        <DishCard category={"Desserts"} dishes={desserts} />
      ) : null}
      {card.menus.length !== 0 ? <MenuCard menus={card.menus} /> : null}
    </View>
  );
};
