import React, { FC } from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { TabBar } from "./tab-bar";
import ProfileScreen from "../../screens/profile";
import RestaurantsScreen from "../../screens/restaurants";
import { StyleSheet, View } from "react-native";
import RecipesScreen from "../../screens/recipes";
import { createStackNavigator } from "@react-navigation/stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const StackScreen = (name: string, component: React.ComponentType) => {
  return () => (
    <Stack.Navigator>
      <Stack.Screen name={name} component={component} />
    </Stack.Navigator>
  );
};

export const BottomTabNavigator: FC = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeAreaBackground: {
      height: useSafeAreaInsets().bottom - 5,
      backgroundColor: "white",
    },
  });

  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen
          name="mapScreen"
          component={StackScreen("Restaurants", RestaurantsScreen)}
        />
        <Tab.Screen
          name="recipeScreen"
          component={StackScreen("Recettes", RecipesScreen)}
        />
        <Tab.Screen name="profileScreen" component={ProfileScreen} />
      </Tab.Navigator>
      {useSafeAreaInsets().bottom > 0 && (
        <View style={styles.safeAreaBackground} />
      )}
    </View>
  );
};
