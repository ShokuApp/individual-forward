import React, { FC } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./components/bottom-tab-navigator";
import { registerRootComponent } from "expo";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const RootStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

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
