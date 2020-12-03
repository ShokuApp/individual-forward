import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./components/bottom-tab-navigator";
import { registerRootComponent } from "expo";
import RestaurantDetailsScreen from "./screens/restaurants/restaurant-details";
import { createStackNavigator } from "@react-navigation/stack";
import { Recipe, Restaurant } from "./models";

const Stack = createStackNavigator();

export type RecipesStackParamList = {
  RecipeDetails: { recipe: Recipe };
};

export type RestaurantStackParamList = {
  RestaurantDetailsScreen: { restaurant: Restaurant };
};

const RestaurantDetailsStack = createStackNavigator<RestaurantStackParamList>();

const RestaurantStack = () => {
  return (
    <RestaurantDetailsStack.Navigator>
      <RestaurantDetailsStack.Screen
        name={"RestaurantDetailsScreen"}
        component={RestaurantDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </RestaurantDetailsStack.Navigator>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default registerRootComponent(App);
