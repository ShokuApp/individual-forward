import React, { FC } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import { Recipe, RecipeStep } from "../../../models";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  step: {
    paddingHorizontal: 5,
    fontSize: 14,
  },
  stepsCounterContainer: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: "white",
    alignItems: "center",
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  counterText: {
    paddingTop: 1,
    color: "#2196F3",
    fontSize: 14,
  },
});

type Props = {
  step: RecipeStep;
};

export const RecipeSteps: FC<Props> = ({ step }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepsCounterContainer}>
        <Text style={styles.counterText}>{step.name.split(" ").pop()}</Text>
      </View>
      <Text style={styles.step}>{step.description}</Text>
    </View>
  );
};
