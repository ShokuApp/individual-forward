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

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  steps: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 5,
  },
  stepsCounter: {
    paddingHorizontal: 5,
    height: 25,
    width: 25,
    backgroundColor: "white",
    borderRadius: 25 / 2,
  },
});

type Props = {
  step: RecipeStep;
};

export const RecipeSteps: FC<Props> = ({ step }: Props) => {
  return (
    <View>
      <Text style={styles.stepsCounter}>{step.name.split(" ").pop()}</Text>
      <Text style={styles.steps}>{step.description}</Text>
    </View>
  );
};
