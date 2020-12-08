import React, { FC, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Dish, Menu, Pictogram } from "../../../models";
import { Profile } from "../../../models";
import { CardDisplay } from "./card-display";
import { CardDescriptionHeader } from "./card-description-header";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ECECEC",
    alignItems: "center",
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
  profile: Profile;
};

const filterDishesByAllergens: (
  dishes: Dish[],
  allergens: Pictogram[]
) => Dish[] = (dishes: Dish[], allergens: Pictogram[]) => {
  return dishes.filter((dish) => {
    return !dish.ingredients.find((ingredient) => {
      for (const allergen of allergens) {
        if (ingredient.allergens.includes(allergen)) {
          return true;
        }
      }
    });
  });
};

export enum CARD_CHOICE {
  FOR_ME = 1,
  ALL_THE_CARD,
}

const filterCardByAllergens: (
  dishes: Dish[],
  menus: Menu[],
  allergens: Pictogram[]
) => { dishes: Dish[]; menus: Menu[]; allDishes: Dish[] } = (
  dishes: Dish[],
  menus: Menu[],
  allergens: Pictogram[]
) => {
  const filteredDishes = filterDishesByAllergens(dishes, allergens);
  const filteredMenus = menus.map((menu) => {
    return {
      ...menu,
      dishes: filterDishesByAllergens(menu.dishes, allergens),
    };
  });
  const allDishes = [
    ...filteredDishes,
    ...menus.reduce((previous: Dish[], current: Menu) => {
      previous.push(...current.dishes);
      return previous;
    }, []),
  ];

  return { dishes: filteredDishes, menus: filteredMenus, allDishes };
};

export const CardDescription: FC<Props> = ({ card, profile }: Props) => {
  const [cardChoice, setCardChoice] = useState(CARD_CHOICE.FOR_ME);
  const allDishes = [
    ...card.dishes,
    ...card.menus.reduce((previous: Dish[], current: Menu) => {
      previous.push(...current.dishes);
      return previous;
    }, []),
  ];
  const unfilteredCard = {
    dishes: { ...card }.dishes,
    menus: { ...card }.menus,
    allDishes,
  };
  const filteredCard = filterCardByAllergens(
    card.dishes,
    card.menus,
    profile.allergens
  );

  return (
    <View style={styles.container}>
      <CardDescriptionHeader setter={setCardChoice} choice={cardChoice} />
      <CardDisplay
        card={cardChoice === CARD_CHOICE.FOR_ME ? filteredCard : unfilteredCard}
        allergens={profile.allergens}
        cardChoice={cardChoice}
      />
    </View>
  );
};
