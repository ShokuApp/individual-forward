import React, { FC } from "react";
import { RouteProp } from "@react-navigation/native";
import { MessagesStackParamsList } from "../../navigator/messages-navigator";
import { ConversationDetails } from "../../components/messages/conversation-details";

type MessageScreenProps = RouteProp<MessagesStackParamsList, "Conversation">;

type Props = {
  route: MessageScreenProps;
};

const ConversationScreen: FC<Props> = ({ route }: Props) => {
  return (
    <ConversationDetails
      profile={route.params.profile}
      conversation={route.params.conversation}
    />
  );
};

export default ConversationScreen;
