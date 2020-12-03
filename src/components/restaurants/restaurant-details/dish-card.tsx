import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dish } from "../../../models/dish";
import { CategoryTitle } from "./category-title";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: "2%",
    marginBottom: "5%",
  },
  dishContainer: {
    width: "100%",
    paddingHorizontal: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "2%",
  },
  dishName: {
    paddingRight: "10%",
  },
});

type Props = {
  category: string;
  dishes: Dish[];
};

export const DishCard: FC<Props> = ({ category, dishes }: Props) => {
  return (
    <View style={styles.container}>
      <CategoryTitle title={category} />
      {dishes.map((dish) => {
        return (
          <View key={dish.name} style={styles.dishContainer}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text>{dish.price}</Text>
          </View>
        );
      })}
    </View>
  );
};
