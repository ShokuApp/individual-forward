import React, { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  bar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: 0.5,
    elevation: 10,
    borderRadius: 50,
    paddingHorizontal: 8,
  },
  input: {
    flexGrow: 1,
    flexShrink: 1,
    width: "100%",
    padding: 8,
  },
});

type Props = {
  text: string;
  setText: (text: string) => void;
};

export const RecipeSearch: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Icon
          color={colors.themeStandard}
          name={"search"}
          type="material-icons"
        />
        <TextInput
          placeholder={"Rechercher"}
          value={props.text}
          onChangeText={(text) => props.setText(text)}
          selectionColor={colors.themeStandard}
          style={styles.input}
        />
      </View>
    </View>
  );
};
