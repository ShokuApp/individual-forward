import React, { FC } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Pictogram } from "../../../models";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "12%",
  },
  allergen: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginHorizontal: 5,
  },
});

type Props = {
  allergens: Pictogram[];
};

export const Allergens: FC<Props> = ({ allergens }: Props) => {
  return (
    <View style={styles.container}>
      {allergens.map((allergen) => (
        <Image
          key={allergen.name}
          style={styles.allergen}
          source={{ uri: allergen.image }}
        />
      ))}
    </View>
  );
};
