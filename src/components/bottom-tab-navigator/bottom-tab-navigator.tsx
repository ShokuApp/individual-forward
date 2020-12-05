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
import { createStackNavigator } from "@react-navigation/stack";

const styles = {
  container: {
    height: "100%",
  },
};

const Stack = createStackNavigator();

const Restaurants: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Restaurants"}
        component={RestaurantsScreen}
        options={{ title: "Restaurants" }}
      />
    </Stack.Navigator>
  );
};

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

export const BottomTabNavigator: FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen name="mapScreen" component={Restaurants} />
        <Tab.Screen name="recipeScreen" component={Recipes} />
        <Tab.Screen name="profileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
