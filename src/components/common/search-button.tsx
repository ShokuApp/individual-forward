import React, { FC } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  searchButton: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#2196F3",
    shadowOffset: {
      height: 3,
      width: 0,
    },
    bottom: 30,
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1,
    borderRadius: 50,
    paddingHorizontal: 8,
  },
  searchText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: "bold",
    color: "white",
  },
});

type Props = {
  label: string;
  onPress: () => void;
};

export const SearchButton: FC<Props> = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.searchButton}>
        <Text style={styles.searchText}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
};
