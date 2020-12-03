import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./components/bottom-tab-navigator";
import { registerRootComponent } from "expo";
import RestaurantDetailsScreen from "./screens/restaurants/restaurant-details";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RestaurantDetailsScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default registerRootComponent(App);
