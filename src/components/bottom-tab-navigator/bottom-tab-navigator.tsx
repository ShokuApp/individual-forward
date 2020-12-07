import React, { FC } from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { TabBar } from "./tab-bar";
import ProfileScreen from "../../screens/profile";
import RestaurantsScreen from "../../screens/restaurants/restaurants";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipesScreen from "../../screens/recipes";
import RecipeDetailsScreen from "../../screens/recipe-details";
import { Recipe } from "../../models";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { Pictogram } from "../../models";
import { SEARCH_BY } from "../restaurants/search-restaurants/search-by";

const styles = {
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  filtersIcon: {
    paddingRight: 10,
  },
};

export type Filters = {
  label: string;
  searchBy: SEARCH_BY;
  price: { lowPrice: boolean; middlePrice: boolean; highPrice: boolean };
  allergens: Pictogram[];
};

export type RestaurantsStackParamsList = {
  Restaurants: { filters: Filters };
};

const RestaurantsStack = createStackNavigator<RestaurantsStackParamsList>();

const Restaurants: FC = () => {
  const Filters = () => {
    const { navigate } = useNavigation();

    return (
      <Icon
        type="evilicon"
        name="search"
        size={30}
        style={styles.filtersIcon}
        onPress={() => navigate("Restaurant", { screen: "SearchRestaurants" })}
      />
    );
  };

  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen
        name={"Restaurants"}
        component={RestaurantsScreen}
        options={{
          title: "Restaurants",
          headerRight: () => <Filters />,
        }}
      />
    </RestaurantsStack.Navigator>
  );
};

const Stack = createStackNavigator();

const Recipes: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Recipes"}
        component={RecipesScreen}
        options={{ title: "Recettes" }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export const BottomTabNavigator: FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen name="RestaurantScreen" component={Restaurants} />
        <Tab.Screen name="RecipeScreen" component={Recipes} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
