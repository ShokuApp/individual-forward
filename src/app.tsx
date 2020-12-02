import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./components/bottom-tab-navigator";
import { registerRootComponent } from "expo";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);