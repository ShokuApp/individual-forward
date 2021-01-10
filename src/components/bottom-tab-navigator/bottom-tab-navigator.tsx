import React, { FC } from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { TabBar } from "./tab-bar";
import ProfileScreen from "../../screens/profile/profile";
import MessagesScreen from "../../screens/messages/messages";
import RestaurantsScreen from "../../screens/restaurants/restaurants";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipesScreen from "../../screens/recipes";
import { Pictogram } from "../../models";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
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

type FiltersProps = {
  stackName: string;
  screenName: string;
};

export type RestaurantsStackParamsList = {
  Restaurants: { filters: Filters };
};

export type RecipesStackParamsList = {
  Recipes: { filters: Filters };
};

const RestaurantsStack = createStackNavigator<RestaurantsStackParamsList>();

const Filters: FC<FiltersProps> = ({ stackName, screenName }: FiltersProps) => {
  const { navigate } = useNavigation();

  return (
    <Icon
      type="evilicon"
      name="search"
      size={30}
      color="#2196F3"
      style={styles.filtersIcon}
      onPress={() => navigate(stackName, { screen: screenName })}
    />
  );
};

const Restaurants: FC = () => {
  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen
        name={"Restaurants"}
        component={RestaurantsScreen}
        options={{
          title: "Restaurants",
          headerTintColor: "#2196F3",
          headerRight: () => (
            <Filters stackName="Restaurant" screenName="SearchRestaurants" />
          ),
        }}
      />
    </RestaurantsStack.Navigator>
  );
};

const RecipesStack = createStackNavigator<RecipesStackParamsList>();

const Recipes: FC = () => {
  return (
    <RecipesStack.Navigator>
      <RecipesStack.Screen
        name={"Recipes"}
        component={RecipesScreen}
        options={{
          title: "Recettes",
          headerTintColor: "#2196F3",
          headerRight: () => (
            <Filters stackName="Recipe" screenName="SearchRecipes" />
          ),
        }}
      />
    </RecipesStack.Navigator>
  );
};

const MessagesStack = createStackNavigator();

const Messages: FC = () => {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name={"Discussions"}
        component={MessagesScreen}
        options={{
          headerTintColor: "#2196F3",
        }}
      />
    </MessagesStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();

const Profile: FC = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={"Profile"}
        component={ProfileScreen}
        options={{ title: "Profil", headerTintColor: "#2196F3" }}
      />
    </ProfileStack.Navigator>
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
        <Tab.Screen name="MessagesScreen" component={Messages} />
        <Tab.Screen name="ProfileScreen" component={Profile} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
