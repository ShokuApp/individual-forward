import React, { FC, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Conversation, Profile } from "../../models";
import { useNavigation } from "@react-navigation/native";

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
  titleAndNotRead: {
    flexDirection: "row",
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#2196F3",
    marginTop: 7,
    marginLeft: 10,
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
  notReadMessage: {
    flex: 0.7,
    fontSize: 14,
    color: "#9E9E9E",
    fontWeight: "bold",
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
  const [notRead, setNotRead] = useState(
    props.conversation.id === "aa76ef71-48d9-4132-a292-1be5e13ffc13"
      ? true
      : false
  );

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
    setNotRead(false);
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
          <View style={styles.titleAndNotRead}>
            <Text style={styles.title}>{title}</Text>
            {notRead ? <View style={styles.circle} /> : null}
          </View>
          <View style={styles.messageAndTime}>
            <Text
              numberOfLines={1}
              style={notRead ? styles.notReadMessage : styles.message}
            >
              {getLastMessage()}
            </Text>
            <Text style={styles.date}>{getTime()}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
