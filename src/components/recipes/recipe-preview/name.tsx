import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    marginLeft: 8,
    marginBottom: 10,
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
});

type Props = { name: string };

const RecipePreviewName: FC<Props> = (props: Props) => {
  return <Text style={styles.text}>{props.name}</Text>;
};

export default RecipePreviewName;
