import React, { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CARD_CHOICE } from "./card-description";

const styles = StyleSheet.create({
  titleContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    color: "#2196F3",
  },
  titleSelected: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2196F3",
  },
});

type Props = {
  setter: (choice: number) => void;
  choice: CARD_CHOICE;
};

export const CardDescriptionHeader: FC<Props> = (props: Props) => {
  return (
    <View style={styles.titleContainer}>
      <TouchableOpacity onPress={() => props.setter(CARD_CHOICE.FOR_ME)}>
        <Text
          style={
            props.choice === CARD_CHOICE.FOR_ME
              ? styles.titleSelected
              : styles.title
          }
        >
          Pour moi
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setter(CARD_CHOICE.ALL_THE_CARD)}>
        <Text
          style={
            props.choice === CARD_CHOICE.ALL_THE_CARD
              ? styles.titleSelected
              : styles.title
          }
        >
          Voir la carte
        </Text>
      </TouchableOpacity>
    </View>
  );
};
