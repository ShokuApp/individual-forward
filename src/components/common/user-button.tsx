import React, { FC } from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "@expo/vector-icons/build/createIconSet";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  label: {
    fontSize: 13,
  },
});

type Props = {
  label: string;
  icon: React.ReactElement<Icon<string, string>>;
  onPress: () => void;
};

export const UserButton: FC<Props> = ({ label, icon, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
