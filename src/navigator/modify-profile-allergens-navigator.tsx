import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ModifyProfileAllergensScreen from "../screens/profile/modify-profile-allergens";
import { Profile } from "../models";
import { Icon } from "react-native-elements";

export type ModifyProfileAllergensStackParamList = {
  ModifyProfileAllergens: { profile: Profile };
};

const ModifyProfileAllergensStack = createStackNavigator<ModifyProfileAllergensStackParamList>();

export const ModifyProfileAllergens: FC = () => {
  return (
    <ModifyProfileAllergensStack.Navigator>
      <ModifyProfileAllergensStack.Screen
        name="ModifyProfileAllergens"
        component={ModifyProfileAllergensScreen}
        options={{
          title: "Modifier mes allergènes",
          headerBackTitle: "Profil",
          headerBackTitleStyle: { color: "white" },
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#2196F3",
          },
          headerBackImage: () => (
            <Icon
              type="entypo"
              name="chevron-small-left"
              color={"white"}
              size={24}
            />
          ),
        }}
      />
    </ModifyProfileAllergensStack.Navigator>
  );
};
