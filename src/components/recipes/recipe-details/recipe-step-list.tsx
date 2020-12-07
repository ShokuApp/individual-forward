import React, { FC } from "react";
import { RecipeSteps } from "./recipe-steps";
import { View, StyleSheet } from "react-native";
import { RecipeStep } from "../../../models";

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
      {steps.map((step, index) => {
        return <RecipeSteps step={step} key={index} />;
      })}
    </View>
  );
};
