import React, { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 40,
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#DADADA",
  },
  switchTitle: {
    paddingHorizontal: 20,
    fontSize: 15,
  },
  switchTitleSelected: {
    fontWeight: "bold",
    color: "#2196F3",
    fontSize: 18,
  },
});

type Props = {
  isSearchBy: number;
  setSearchBy: (searchBy: number) => void;
};

export enum SEARCH_BY {
  RESTAURANT = 1,
  RECIPE,
}

export const SearchBy: FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Rechercher un :</Text>
      <TouchableOpacity
        onPress={() => {
          props.setSearchBy(SEARCH_BY.RESTAURANT);
        }}
      >
        <Text
          style={
            props.isSearchBy === SEARCH_BY.RESTAURANT
              ? [styles.switchTitle, styles.switchTitleSelected]
              : styles.switchTitle
          }
        >
          restaurant
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.setSearchBy(SEARCH_BY.RECIPE);
        }}
      >
        <Text
          style={
            props.isSearchBy === SEARCH_BY.RECIPE
              ? [styles.switchTitle, styles.switchTitleSelected]
              : styles.switchTitle
          }
        >
          plat
        </Text>
      </TouchableOpacity>
    </View>
  );
};
