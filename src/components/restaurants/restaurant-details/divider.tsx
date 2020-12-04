import React, { FC } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  divider: {
    height: 1,
    alignItems: "center",
  },
});

type Props = {
  width: number | string;
  color: string;
};

export const Divider: FC<Props> = ({ width, color }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.divider, { width, backgroundColor: color }]} />
    </View>
  );
};
