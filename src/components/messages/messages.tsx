import React, { FC } from "react";
import { Profile } from "../../models";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

type Props = {
  profile: Profile;
};

export const Messages: FC<Props> = (props: Props) => {
  return <View style={styles.container}></View>;
};
