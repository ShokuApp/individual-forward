import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { BottomMenu } from "./components/tab-bar/bottom-tab-navigator";
import { registerRootComponent } from "expo";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomMenu />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);