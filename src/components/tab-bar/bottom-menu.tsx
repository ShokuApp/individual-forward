import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { TabBar } from "./tab-bar";
import { ProfilScreen } from "../../screens/profil";
import { MapScreen } from "../../screens/map";
import { RecipesScreen } from "../../screens/recipes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";

export const BottomMenu = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "relative"
    },
    safeAreaBackground: {
      height: useSafeAreaInsets().bottom - 5,
      backgroundColor: "white"
    }
  });

  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen name="chefHat" component={MapScreen} />
        <Tab.Screen name="recipeBook" component={RecipesScreen} />
        <Tab.Screen name="profil" component={ProfilScreen} />
      </Tab.Navigator>
      {useSafeAreaInsets().bottom > 0 && (
        <View
          style={styles.safeAreaBackground}
        />
      )}
    </View>
  );
};
