import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: "#8A8A8A",
  },
});

type Props = {
  label: string;
};

export const InformationSubtitle: FC<Props> = ({ label }: Props) => {
  return <Text style={styles.label}>{label}</Text>;
};
