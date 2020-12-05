import React, { FC } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card, Dish, Menu } from "../../../models";
import { DishesSection } from "./dishes-section";
import { MenuCard } from "./menu-card";
import { Allergens } from "./allergens";
import { Profile } from "../../../models";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ECECEC",
    alignItems: "center",
  },
  headerContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
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
  warningContainer: {
    marginTop: 20,
  },
  warningLabel: {
    fontSize: 18,
    color: "black",
  },
});

type Props = {
  card: Card;
  profile: Profile;
};

const getDishesFromProfileAllergens: (
  dishes: Dish[],
  profile: Profile
) => Dish[] = (dishes: Dish[], profile: Profile) => {
  return dishes.filter((dish) => {
    return !dish.ingredients.find((ingredient) => {
      for (const allergen of profile.allergens) {
        if (ingredient.allergens.includes(allergen)) {
          return true;
        }
      }
    });
  });
};

const getProfileCard: (
  dishes: Dish[],
  menus: Menu[],
  profile: Profile
) => { dishes: Dish[]; menus: Menu[]; allDishes: Dish[] } = (
  dishes: Dish[],
  menus: Menu[],
  profile: Profile
) => {
  const filteredDishes = getDishesFromProfileAllergens(dishes, profile);
  const filteredMenus = menus.map((menu) => {
    return {
      ...menu,
      dishes: getDishesFromProfileAllergens(menu.dishes, profile),
    };
  });
  const allDishes = [...filteredDishes, ...menus.map((menu) => menu.dishes)];

  return { dishes: filteredDishes, menus: filteredMenus, allDishes: allDishes };
};

export const CardDescription: FC<Props> = ({ card, profile }: Props) => {
  const profileCard = getProfileCard(card.dishes, card.menus, profile);
  const starters = profileCard.dishes.filter((dish) => dish.type === "starter");
  const plates = profileCard.dishes.filter((dish) => dish.type === "plate");
  const desserts = profileCard.dishes.filter((dish) => dish.type === "dessert");
  const menus = profileCard.menus;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Pour moi</Text>
        <TouchableOpacity
          style={styles.filterContainer}
          onPress={() => alert("Todo!")}
        >
          <Text style={styles.filtreLabel}>Voir la carte</Text>
          <Icon
            type="evilicon"
            name="chevron-right"
            size={24}
            color="#2196F3"
          />
        </TouchableOpacity>
      </View>
      {!profileCard.allDishes || profileCard.allDishes.length === 0 ? (
        <View style={styles.warningContainer}>
          <Text style={styles.warningLabel}>
            Aucun plat ne correspond a votre profil
          </Text>
        </View>
      ) : null}
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
      {profile.allergens.length !== 0 ? (
        <View style={styles.allergenContainer}>
          <Text style={styles.allergenLabel}>
            Ces plats ne contiennent pas les allergènes suivant:
          </Text>
          <Allergens allergens={profile.allergens} />
        </View>
      ) : null}
    </View>
  );
};
