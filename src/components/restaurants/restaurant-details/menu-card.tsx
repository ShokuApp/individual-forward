import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Menu } from "../../../models/menu";
import { Divider } from "./divider";
import { CategoryTitle } from "./category-title";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: "2%",
    marginBottom: "10%",
  },
  menuContainer: {
    marginBottom: "7%",
    width: "90%",
  },
  menuTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dishContainer: {
    width: "100%",
    paddingLeft: "10%",
  },
  dishTitleContainer: {
    marginVertical: "2%",
  },
  dishTitle: {
    fontSize: 12,
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
        return (
          <View key={menu.name} style={styles.menuContainer}>
            <View style={styles.menuTitleContainer}>
              <Text>{menu.name}</Text>
              <Text>{menu.price}</Text>
            </View>
            <Divider width={"100%"} color={"#DADADA"} />
            {menu.dishes.map((dish) => {
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
      })}
    </View>
  );
};
