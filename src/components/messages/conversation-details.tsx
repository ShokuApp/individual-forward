import React, { FC } from "react";
import { Conversation, Profile } from "../../models";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserMessage } from "./user-message";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 50,
  },
  textInputContainer: {
    height: 50,
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    opacity: 0.97,
    left: 0,
    right: 0,
    bottom: 0,
  },
  textInput: {
    alignItems: "flex-start",
    justifyContent: "center",
    height: 40,
    width: "90%",
    backgroundColor: "#ECECEC",
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  text: {
    color: "#9E9E9E",
    fontSize: 17,
  },
});

type Props = {
  profile: Profile;
  conversation: Conversation;
};

const { height } = Dimensions.get("window");

export const ConversationDetails: FC<Props> = (props: Props) => {
  const checkSenderMessage = (sender: Profile) => {
    return props.profile.id === sender.id;
  };

  const scrollStyle = {
    height: height * 0.8 + 30,
  };

  if (Platform.OS === "ios") {
    const { top, bottom } = useSafeAreaInsets();

    scrollStyle.height -= top + bottom;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false} style={scrollStyle}>
          {props.conversation.messages.map((message) => (
            <UserMessage
              key={message.id}
              message={message}
              sender={checkSenderMessage(message.sender)}
            />
          ))}
        </ScrollView>
        <View style={styles.textInputContainer}>
          <View style={styles.textInput}>
            <Text style={styles.text}>Écrivez un message...</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
