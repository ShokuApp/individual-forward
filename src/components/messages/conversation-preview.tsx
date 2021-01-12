import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Conversation, Profile } from "../../models";

const styles = StyleSheet.create({
  container: {
    height: 65,
    justifyContent: "center",
    marginVertical: 2,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  picture: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
  titleAndMessageContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    paddingLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 4,
  },
  messageAndTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  message: {
    fontSize: 14,
    color: "#9E9E9E",
  },
  date: {
    fontSize: 14,
    color: "#9E9E9E",
    paddingLeft: 10,
  },
});

type Props = {
  conversation: Conversation;
  profile: Profile;
};

export const ConversationPreview: FC<Props> = (props: Props) => {
  const getTitle: () => string = () => {
    if (props.conversation.title) return props.conversation.title;
    const profiles = props.conversation.users.filter(
      (user) => user.id !== props.profile.id
    );
    const fullnames = profiles.map((profile) => {
      return [profile.firstName, profile.lastName].join(" ");
    });
    return fullnames.join(", ");
  };

  const getPicture: () => string = () => {
    const profiles = props.conversation.users.filter(
      (user) => user.id !== props.profile.id
    );
    return profiles[0].profilePicture;
  };

  const getLastMessage: () => string = () => {
    let lastMessage =
      props.profile.id ===
      props.conversation.messages[props.conversation.messages.length - 1].sender
        .id
        ? "Vous: "
        : props.conversation.users.length > 2
        ? props.conversation.messages[props.conversation.messages.length - 1]
            .sender.firstName + ": "
        : "";
    lastMessage +=
      props.conversation.messages[props.conversation.messages.length - 1]
        .content;
    lastMessage =
      lastMessage.length >= 43
        ? lastMessage.substring(0, 43 - 3) + "..."
        : lastMessage;
    return lastMessage;
  };

  const getTime: () => string = () => {
    const timestamp =
      props.conversation.messages[props.conversation.messages.length - 1]
        .timestamp;
    const date = new Date(+timestamp).toLocaleString();
    const now = new Date().toLocaleString().slice(0, 10);
    return date.slice(0, 10) !== now ? date.slice(0, 5) : date.slice(12, 17);
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.infoContainer}>
        <Image style={styles.picture} source={{ uri: getPicture() }} />
        <View style={styles.titleAndMessageContainer}>
          <Text style={styles.title}>{getTitle()}</Text>
          <View style={styles.messageAndTime}>
            <Text style={styles.message}>{getLastMessage()}</Text>
            <Text style={styles.date}>{getTime()}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
