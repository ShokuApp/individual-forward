import React from "react";
import {
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { BottomMenu } from "./components/tab-bar/bottom-menu";
import { registerRootComponent } from "expo";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <BottomMenu />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);