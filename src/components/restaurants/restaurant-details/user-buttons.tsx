import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { UserButton } from "../../common/user-button";
import { SimpleLineIcons, EvilIcons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";

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
        icon={<Icon type="evilicon" name="heart" size={50} color="#2196F3" />}
        onPress={() => alert("Favoris")}
      />
      <UserButton
        label="Commenter"
        icon={<Icon type="evilicon" name="comment" size={50} color="#2196F3" />}
        onPress={() => alert("Commenter")}
      />
      <UserButton
        label="Noter"
        icon={<Icon type="evilicon" name="star" size={50} color="#2196F3" />}
        onPress={() => alert("Noter")}
      />
      <UserButton
        label="Appeler"
        icon={
          <Icon
            type="simple-line-icon"
            name="phone"
            size={37.5}
            color="#2196F3"
          />
        }
        onPress={() => alert("Appeler")}
      />
    </View>
  );
};
