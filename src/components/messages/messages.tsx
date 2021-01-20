import React, { FC } from "react";
import { Profile } from "../../models";
import { StyleSheet, Text, ScrollView } from "react-native";
import {
  ConversationBloc,
  ConversationErrorState,
  ConversationGetEvent,
  ConversationGetState,
  ConversationState,
} from "../../blocs/conversation";
import { ConversationRepository } from "../../repositories";
import { BlocBuilder } from "@felangel/react-bloc";
import { ConversationPreview } from "./conversation-preview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});

type ConversationGetProps = {
  profile: Profile;
  conversationId: string;
};

export const ConversationGet: FC<ConversationGetProps> = (
  props: ConversationGetProps
) => {
  const conversationBloc = new ConversationBloc(new ConversationRepository());
  conversationBloc.add(new ConversationGetEvent(props.conversationId));
  return (
    <BlocBuilder
      bloc={conversationBloc}
      builder={(state: ConversationState) => {
        if (state instanceof ConversationErrorState) {
          return <Text>Error</Text>;
        }
        if (state instanceof ConversationGetState) {
          return (
            <ConversationPreview
              conversation={state.conversation}
              profile={props.profile}
            />
          );
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

type Props = {
  profile: Profile;
};

export const Messages: FC<Props> = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      {props.profile.conversations.map((conversation) => {
        return (
          <ConversationGet
            key={conversation}
            profile={props.profile}
            conversationId={conversation}
          />
        );
      })}
    </ScrollView>
  );
};
