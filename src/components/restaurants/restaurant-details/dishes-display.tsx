import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dish } from "../../../models";
import { Divider } from "../../common";

const styles = StyleSheet.create({
  dishContainer: {
    width: "100%",
    paddingLeft: "6%",
  },
  dishTitleContainer: {
    marginVertical: 8,
  },
  dishTitle: {
    fontSize: 12,
  },
});

type DishesDisplayProps = {
  dishes: Dish[];
};

export const DishesDisplay: FC<DishesDisplayProps> = ({
  dishes,
}: DishesDisplayProps) => {
  return (
    <View>
      {dishes.map((dish) => {
        return (
          <View key={dish.name} style={styles.dishContainer}>
            <View style={styles.dishTitleContainer}>
              <Text style={styles.dishTitle}>{dish.name}</Text>
            </View>
            <Divider width={"100%"} color={"#DADADA"} />
          </View>
        );
      })}
    </View>
  );
};
