import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  countIcon: {
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    marginHorizontal: 2,
  },
  textNumber: {
    fontSize: 20,
    color: "#2196F3",
    marginHorizontal: 2,
  },
  helperText: {
    fontSize: 12,
    color: "#8A8A8A",
    paddingTop: 5,
    paddingLeft: 30,
  },
});

type Props = {
  count: number;
  minusClick: () => void;
  addClick: () => void;
};

export const RecipeNumberInput: FC<Props> = ({
  count,
  minusClick,
  addClick,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.helperText}>Personnes : </Text>
      <TouchableOpacity
        style={styles.countIcon}
        onPress={() => {
          minusClick();
        }}
      >
        <Icon type="ionicon" name="ios-remove" size={25} color="#2196F3" />
      </TouchableOpacity>
      <Text style={styles.textNumber}>{count}</Text>
      <TouchableOpacity
        style={styles.countIcon}
        onPress={() => {
          addClick();
        }}
      >
        <Icon type="ionicon" name="ios-add" size={25} color="#2196F3" />
      </TouchableOpacity>
    </View>
  );
};
