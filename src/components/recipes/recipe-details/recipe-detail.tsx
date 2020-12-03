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
import { Recipe } from "../../../models";
import { RecipeSteps } from "./recipe-steps";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: (92 * width) / 100,
    borderRadius: 10,
    backgroundColor: "#FF0000",
  },
});

type Props = {
  recipe: Recipe;
};

export const RecipeDetail: FC<Props> = ({ recipe }: Props) => {
  return (
    <View style={styles.container}>
      {recipe.steps.map((step) => {
        return <RecipeSteps step={step} />;
      })}
    </View>
  );
};
