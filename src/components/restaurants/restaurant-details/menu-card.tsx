import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Menu } from "../../../models";
import { Divider } from "../../common";
import { CategoryTitle } from "./category-title";
import { DishesDisplay } from "./dishes-display";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  menuContainer: {
    marginBottom: 8,
    width: "90%",
  },
  menuTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});

type Props = {
  menus: Menu[];
};

export const MenuCard: FC<Props> = ({ menus }: Props) => {
  return (
    <View style={styles.container}>
      <CategoryTitle title={"Menus"} />
      {menus.map((menu) => {
        const starters = menu.dishes.filter((dish) => dish.type === "starter");
        const plates = menu.dishes.filter((dish) => dish.type === "plate");
        const desserts = menu.dishes.filter((dish) => dish.type === "dessert");

        return (
          <View key={menu.name} style={styles.menuContainer}>
            <View style={styles.menuTitleContainer}>
              <Text>{menu.name}</Text>
              <Text>{menu.price.toString() + "€"}</Text>
            </View>
            <Divider width={"100%"} color={"#DADADA"} />
            {starters.length !== 0 ? <DishesDisplay dishes={starters} /> : null}
            {plates.length !== 0 ? <DishesDisplay dishes={plates} /> : null}
            {desserts.length !== 0 ? <DishesDisplay dishes={desserts} /> : null}
          </View>
        );
      })}
    </View>
  );
};
