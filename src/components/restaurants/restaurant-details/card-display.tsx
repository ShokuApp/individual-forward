import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dish, Menu, Pictogram } from "../../../models";
import { CARD_CHOICE } from "./card-description-header";
import { DishesSection } from "./dishes-section";
import { MenuCard } from "./menu-card";
import { Allergens } from "./allergens";

const styles = StyleSheet.create({
  allergenContainer: {
    width: "100%",
    paddingHorizontal: "5%",
    alignItems: "center",
  },
  allergenLabel: {
    fontSize: 13,
    color: "#2196F3",
  },
  warningContainer: {
    marginTop: 20,
  },
  warningLabel: {
    fontSize: 18,
    color: "black",
  },
});

type Props = {
  card: { dishes: Dish[]; menus: Menu[]; allDishes: Dish[] };
  allergens: Pictogram[];
  cardChoice: CARD_CHOICE;
};

export const CardDisplay: FC<Props> = (props: Props) => {
  const starters = props.card.dishes.filter((dish) => dish.type === "starter");
  const plates = props.card.dishes.filter((dish) => dish.type === "plate");
  const desserts = props.card.dishes.filter((dish) => dish.type === "dessert");
  const menus = props.card.menus;
  const allDishes = props.card.allDishes;

  return (
    <>
      {!allDishes || allDishes.length === 0 ? (
        <View style={styles.warningContainer}>
          <Text style={styles.warningLabel}>
            Aucun plat ne correspond à votre profil
          </Text>
        </View>
      ) : (
        <>
          {starters.length !== 0 ? (
            <DishesSection category={"Entrées"} dishes={starters} />
          ) : null}
          {plates.length !== 0 ? (
            <DishesSection category={"Plats"} dishes={plates} />
          ) : null}
          {desserts.length !== 0 ? (
            <DishesSection category={"Desserts"} dishes={desserts} />
          ) : null}
          {menus.length !== 0 ? <MenuCard menus={menus} /> : null}
          {props.allergens.length !== 0 &&
          props.cardChoice === CARD_CHOICE.FOR_ME ? (
            <View style={styles.allergenContainer}>
              <Text style={styles.allergenLabel}>
                Ces plats ne contiennent pas les allergènes suivants :
              </Text>
              <Allergens allergens={props.allergens} />
            </View>
          ) : null}
        </>
      )}
    </>
  );
};
