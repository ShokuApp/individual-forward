import React, { FC } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    width,
  },
  countIcon: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  textNumber: {
    fontSize: 20,
    color: "#2196F3",
    marginHorizontal: 2,
  },
  ingredientSectionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: "#8A8A8A",
    paddingTop: 5,
    paddingLeft: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2196F3",
  },
  inputIngredient: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 80,
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
      <Text style={styles.sectionTitle}>Ingrédients</Text>
      <Text style={styles.sectionSubtitle}>Nombre de personnes</Text>
      <View style={styles.inputIngredient}>
        <TouchableOpacity
          style={styles.countIcon}
          onPress={() => {
            minusClick();
          }}
        >
          <Ionicons name="ios-remove" size={25} color="#2196F3" />
        </TouchableOpacity>
        <Text style={styles.textNumber}>{count}</Text>
        <TouchableOpacity
          style={styles.countIcon}
          onPress={() => {
            addClick();
          }}
        >
          <Ionicons name="ios-add" size={25} color="#2196F3" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
