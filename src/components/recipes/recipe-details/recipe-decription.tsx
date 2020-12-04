import React, { FC } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Recipe } from "../../../models";

type Props = {
  recipe: Recipe;
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  descriptionView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width,
  },
  descriptionTextLeft: {
    marginHorizontal: 30,
    marginTop: 20,
    color: "#8A8A8A",
    textAlign: "left",
  },
  descriptionTextRight: {
    marginHorizontal: 30,
    marginTop: 20,
    color: "#8A8A8A",
    textAlign: "right",
  },
  descriptionValueTextLeft: {
    marginHorizontal: 30,
    textAlign: "left",
  },
  descriptionValueTextRight: {
    marginHorizontal: 30,
    textAlign: "right",
  },
});

export const RecipeDescription: FC<Props> = ({ recipe }: Props) => {
  return (
    <View>
      <View style={styles.descriptionView}>
        <View>
          <Text style={styles.descriptionTextLeft}>Préparation</Text>
          <Text style={styles.descriptionValueTextLeft}>
            {Math.round(recipe.average_time / 60)} minutes
          </Text>
        </View>
        <View>
          <Text style={styles.descriptionTextRight}>Cuisson</Text>
          <Text style={styles.descriptionValueTextRight}>
            {Math.round(recipe.average_time / 60)} minutes
          </Text>
        </View>
      </View>
      <View style={styles.descriptionView}>
        <View>
          <Text style={styles.descriptionTextLeft}>Fait par</Text>
          <Text style={styles.descriptionValueTextLeft}>ViviG51</Text>
        </View>
        <View>
          <Text style={styles.descriptionTextRight}>Note</Text>
          <Text style={styles.descriptionValueTextRight}>
            {recipe.average_rate}/5
          </Text>
        </View>
      </View>
    </View>
  );
};
