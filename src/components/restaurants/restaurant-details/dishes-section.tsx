import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dish } from "../../../models";
import { CategoryTitle } from "./category-title";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  dishContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomColor: "#DADADA",
    borderBottomWidth: 1,
  },
  dishName: {
    paddingRight: 20,
  },
});

type Props = {
  category: string;
  dishes: Dish[];
};

export const DishesSection: FC<Props> = ({ category, dishes }: Props) => {
  return (
    <View style={styles.container}>
      <CategoryTitle title={category} />
      {dishes.map((dish) => {
        return (
          <View key={dish.name} style={styles.dishContainer}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text>{dish.price.toString() + "€"}</Text>
          </View>
        );
      })}
    </View>
  );
};
