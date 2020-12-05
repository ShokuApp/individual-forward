import React, { FC } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Recipe } from "../../../models";
import { InformationSubtitle } from "./information-subtitle";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  informationRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  labelContainer: {
    width: width / 2.5,
    flexShrink: 1,
  },
  typeContainer: {
    alignItems: "flex-end",
  },
  informationLabel: {
    fontSize: 14,
  },
});

type Props = {
  recipe: Recipe;
};

export const RecipeDescription: FC<Props> = ({ recipe }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.informationRow}>
        <View>
          <InformationSubtitle label="Préparation" />
          <Text style={styles.labelContainer}>
            {Math.round(recipe.average_time / 60)}
          </Text>
        </View>
        <View style={[styles.typeContainer, styles.labelContainer]}>
          <InformationSubtitle label="Cuisson" />
          <Text style={styles.typeContainer}>
            {Math.round(recipe.average_time / 60)}
          </Text>
        </View>
      </View>
      <View style={styles.informationRow}>
        <View>
          <InformationSubtitle label="Fait par" />
          <Text style={styles.labelContainer}>ViviG51</Text>
        </View>
        <View style={[styles.typeContainer, styles.labelContainer]}>
          <InformationSubtitle label="Note" />
          <Text style={styles.typeContainer}>
            {recipe.average_rate.toString() + "/5"}
          </Text>
        </View>
      </View>
    </View>
  );
};
