import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Conversation, Profile } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { getTime } from "../../helpers/messages/get-time";

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
    flex: 0.7,
    fontSize: 14,
    color: "#9E9E9E",
  },
  date: {
    flex: 0.3,
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
  const { navigate } = useNavigation();

  const getTitle: () => string = () => {
    if (props.conversation.title) return props.conversation.title;
    const profiles = props.conversation.users.filter(
      (user) => user.id !== props.profile.id
    );
    const fullnames = profiles.map((profile) => {
      return profile.firstName + " " + profile.lastName;
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
    const lastMessage =
      props.conversation.messages[props.conversation.messages.length - 1];
    let lastMessageContent = lastMessage.content;

    if (lastMessage.sender.id === props.profile.id) {
      lastMessageContent = `Vous : ${lastMessage.content}`;
    } else if (props.conversation.users.length > 2) {
      lastMessageContent = `${lastMessage.sender.firstName} : ${lastMessage.content}`;
    }

    return lastMessageContent;
  };

  const goToConversation = () => {
    navigate("Messages", {
      screen: "Conversation",
      params: {
        conversationName: title,
        profile: props.profile,
        conversation: props.conversation,
      },
    });
  };

  const getTime: () => string = () => {
    const lastMessage =
      props.conversation.messages[props.conversation.messages.length - 1];
    const lastMessageDate = new Date(+lastMessage.timestamp);
    const nowDate = new Date();

    if (nowDate.toLocaleDateString() === lastMessageDate.toLocaleDateString()) {
      return lastMessageDate
        .toLocaleTimeString()
        .split(":")
        .slice(0, 2)
        .join(":");
    }

    return lastMessageDate
      .toLocaleDateString()
      .split("/")
      .slice(0, 2)
      .join("/");
  };

  const title = getTitle();

  return (
    <TouchableOpacity style={styles.container} onPress={goToConversation}>
      <View style={styles.infoContainer}>
        <Image style={styles.picture} source={{ uri: getPicture() }} />
        <View style={styles.titleAndMessageContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.messageAndTime}>
            <Text numberOfLines={1} style={styles.message}>
              {getLastMessage()}
            </Text>
            <Text style={styles.date}>{getTime()}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
