import React, { FC } from "react";
import { Message } from "../../models";
import { StyleSheet, Text, View } from "react-native";
import { getTime } from "../../helpers/messages/get-time";

const styles = StyleSheet.create({
  connectedUserContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
    alignItems: "flex-end",
  },
  otherUserContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
    alignItems: "flex-start",
  },
  connectedUserMessageContainer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "#2196F3",
    borderRadius: 20,
  },
  otherUserMessageContainer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "#ECECEC",
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontSize: 17,
  },
  date: {
    color: "#9E9E9E",
    fontSize: 12,
  },
});

type Props = {
  message: Message;
  sender: boolean;
};

export const ConnectedUserMessage: FC<Props> = (props: Props) => {
  return (
    <View
      style={
        props.sender ? styles.connectedUserContainer : styles.otherUserContainer
      }
    >
      <View
        style={
          props.sender
            ? styles.connectedUserMessageContainer
            : styles.otherUserMessageContainer
        }
      >
        <Text
          style={props.sender ? styles.text : [styles.text, { color: "black" }]}
        >
          {props.message.content}
        </Text>
      </View>
      <Text style={styles.date}>{getTime(props.message.timestamp)}</Text>
    </View>
  );
};
