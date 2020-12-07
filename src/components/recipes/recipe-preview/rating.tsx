import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  text: {
    marginRight: 3,
  },
});

type Props = { averageRate: number };

export const RecipePreviewRating: FC<Props> = (props: Props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.averageRate}</Text>
      <Icon
        style={styles.icon}
        name="star-o"
        type="font-awesome"
        size={15}
        color="#000"
      />
    </View>
  );
};
