import React, { FC } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card, Dish, Menu } from "../../../models";
import { EvilIcons } from "@expo/vector-icons";
import { DishCard } from "./dish-card";
import { MenuCard } from "./menu-card";
import { Allergens } from "./allergens";
import { Profile } from "../../../models";

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
  allergenContainer: {
    width: "100%",
    paddingHorizontal: "5%",
    alignItems: "center",
  },
  allergenLabel: {
    fontSize: 13,
    color: "#2196F3",
    marginBottom: "2%",
  },
});

type Props = {
  card: Card;
  profile: Profile;
};

export const CardDescription: FC<Props> = ({ card, profile }: Props) => {
  const getProfileDishes = ({ dishes }: { dishes: Dish[] }) => {
    return dishes.filter((dish) => {
      let returnValue = true;
      dish.ingredients.map((ingredient) => {
        ingredient.allergens.map((allergen) => {
          if (profile.allergens.includes(allergen)) {
            returnValue = false;
          }
        });
      });
      return returnValue;
    });
  };

  const getProfileCard = ({
    dishes,
    menu,
  }: {
    dishes: Dish[];
    menu: Menu[];
  }) => {
    let profileDishes: Dish[] = dishes;
    const profileMenu: Menu[] = menu;

    profileDishes = getProfileDishes({ dishes: profileDishes });
    profileMenu.map((menu) => {
      menu.dishes = getProfileDishes(menu);
    });

    return { profileDishes, profileMenu };
  };
  const profileCard = getProfileCard({
    dishes: card.dishes,
    menu: card.menus,
  });
  const starters = profileCard.profileDishes.filter(
    (dish) => dish.type === "starter"
  );
  const plates = profileCard.profileDishes.filter(
    (dish) => dish.type === "plate"
  );
  const desserts = profileCard.profileDishes.filter(
    (dish) => dish.type === "dessert"
  );
  const menus = profileCard.profileMenu;

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
      {menus.length !== 0 ? <MenuCard menus={menus} /> : null}
      <View style={styles.allergenContainer}>
        <Text style={styles.allergenLabel}>
          Ces recettes ne contiennent pas les allergènes suivant:
        </Text>
        <Allergens
          dishes={profileCard.profileDishes}
          menus={menus}
          profile={profile}
        />
      </View>
    </View>
  );
};
