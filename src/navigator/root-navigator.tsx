import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsStackScreens } from "./restaurants-navigator";
import { BottomTabNavigator } from "../components/bottom-tab-navigator";

export type HomeStackParamList = {
  Home: { filters: any };
  Restaurant: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

export const RootStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantsStackScreens}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
