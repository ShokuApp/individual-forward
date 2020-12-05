import React, { FC } from "react";
import { RecipeSteps } from "./recipe-steps";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { RecipeStep } from "../../../models";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});

type Props = {
  steps: RecipeStep[];
};

export const RecipeStepsList: FC<Props> = ({ steps }: Props) => {
  return (
    <View style={styles.container}>
      {steps.map((step) => {
        return <RecipeSteps step={step} key={step.name} />;
      })}
    </View>
  );
};
