import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./components/bottom-tab-navigator";
import { registerRootComponent } from "expo";
import { createStackNavigator } from "@react-navigation/stack";
import { Recipe } from "./models";

const Stack = createStackNavigator();

export type RecipesStackParamList = {
  RecipeDetails: { recipe: Recipe };
};

const RecipeDetailsStack = createStackNavigator<RecipesStackParamList>();

const RootStack = () => {
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
