import React, { FC } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Dish, Menu, Profile, Pictogram } from "../../../models";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "12%",
  },
  allergen: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginHorizontal: "1%",
  },
});

type Props = {
  dishes: Dish[];
  menus: Menu[];
  profile: Profile;
};

export const Allergens: FC<Props> = ({ dishes, menus, profile }: Props) => {
  const getDishesAllergen = ({
    dishes,
    allergens,
  }: {
    dishes: Dish[];
    allergens: Pictogram[];
  }) => {
    for (const dish of dishes) {
      for (const ingredient of dish.ingredients) {
        for (const allergen of ingredient.allergens) {
          if (allergens.includes(allergen)) {
            allergens = allergens.filter(
              (myAllergens) => myAllergens !== allergen
            );
          }
        }
      }
    }
    return allergens;
  };

  const getAllergens = () => {
    let allergens: Pictogram[] = profile.allergens;
    allergens = getDishesAllergen({ dishes, allergens });
    menus.map((menu) => {
      allergens = getDishesAllergen({
        dishes: menu.dishes,
        allergens,
      });
    });
    return allergens;
  };

  const allergens = getAllergens();
  return (
    <View style={styles.container}>
      {allergens.map((allergen) => (
        <Image
          key={allergen.name}
          style={styles.allergen}
          source={{ uri: allergen.image }}
        />
      ))}
    </View>
  );
};
