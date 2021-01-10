import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import { Conversation, Profile } from "../models";
import ConversationScreen from "../screens/messages/conversation";

export type MessagesStackParamsList = {
  Conversation: {
    conversationName: string;
    profile: Profile;
    conversation: Conversation;
  };
};

const MessagesStack = createStackNavigator<MessagesStackParamsList>();

export const MessagesStackScreen: FC = () => {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name={"Conversation"}
        component={ConversationScreen}
        options={({ route }) => ({
          title: route.params.conversationName,
          headerBackTitle: "Discussions",
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
        })}
      />
    </MessagesStack.Navigator>
  );
};
