import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { UserButton } from "./user-button";
import { Feather, SimpleLineIcons, EvilIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    justifyContent: "center",
    flexDirection: "row",
  },
});

export const UserButtons: FC = () => {
  return (
    <View style={styles.container}>
      <UserButton
        label="Favoris"
        icon={<EvilIcons name="heart" size={50} color="#2196F3" />}
        onPress={() => alert("Favoris")}
      />
      <UserButton
        label="Commenter"
        icon={<EvilIcons name="comment" size={50} color="#2196F3" />}
        onPress={() => alert("Commenter")}
      />
      <UserButton
        label="Noter"
        icon={<EvilIcons name="star" size={50} color="#2196F3" />}
        onPress={() => alert("Noter")}
      />
      <UserButton
        label="Appeler"
        icon={<SimpleLineIcons name="phone" size={37.5} color="#2196F3" />}
        onPress={() => alert("Appeler")}
      />
    </View>
  );
};
