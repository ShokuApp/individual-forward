import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  category: {
    fontSize: 18,
    color: "#2196F3",
  },
});

type Props = {
  title: string;
};

export const CategoryTitle: FC<Props> = ({ title }: Props) => {
  return <Text style={styles.category}>{title}</Text>;
};
