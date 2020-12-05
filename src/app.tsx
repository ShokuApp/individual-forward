import React, { FC } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { RootStack } from "./navigator/root-navigator";

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default registerRootComponent(App);
