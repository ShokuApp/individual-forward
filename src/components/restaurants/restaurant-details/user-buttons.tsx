import React, { FC } from "react";
import { Alert, View, StyleSheet } from "react-native";
import { UserButton } from "../../common";
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
        onPress={() =>
          Alert.alert("", "Cette fonctionnalité n'est pas encore disponible.")
        }
      />
      <UserButton
        label="Commenter"
        icon={<Icon type="evilicon" name="comment" size={50} color="#2196F3" />}
        onPress={() =>
          Alert.alert("", "Cette fonctionnalité n'est pas encore disponible.")
        }
      />
      <UserButton
        label="Noter"
        icon={<Icon type="evilicon" name="star" size={50} color="#2196F3" />}
        onPress={() =>
          Alert.alert("", "Cette fonctionnalité n'est pas encore disponible.")
        }
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
        onPress={() =>
          Alert.alert("", "Cette fonctionnalité n'est pas encore disponible.")
        }
      />
    </View>
  );
};
