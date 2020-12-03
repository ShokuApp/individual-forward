import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./components/bottom-tab-navigator";
import { registerRootComponent } from "expo";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeDetailsScreen from "./screens/recipe-details";
import { Recipe } from "./models";

const Stack = createStackNavigator();

export type RecipesStackParamList = {
  Recipes: undefined;
  RecipeDetails: { recipe: Recipe };
};

const RecipeDetailsStack = createStackNavigator<RecipesStackParamList>();

const RecipeDetails = () => {
  return (
    <RecipeDetailsStack.Navigator>
      <RecipeDetailsStack.Screen
        name="RecipeDetails"
        component={RecipeDetailsScreen}
        options={{ headerShown: false }}
      />
    </RecipeDetailsStack.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RecipeDetails"
            component={RecipeDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default registerRootComponent(App);
