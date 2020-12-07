import { Icon } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginLeft: 8,
  },
  text: {
    marginLeft: 3,
    fontSize: 12,
  },
});

type Props = { preparationTime: number; cookingTime: number };

export const RecipePreviewPreparationTime: FC<Props> = (props: Props) => {
  return (
    <View style={styles.view}>
      <Icon
        style={styles.icon}
        name="clock"
        type="feather"
        size={15}
        color="#000"
      />
      <Text style={styles.text}>
        {Math.ceil((props.preparationTime + props.cookingTime) / 60)} min
      </Text>
    </View>
  );
};
