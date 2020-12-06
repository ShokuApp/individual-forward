import React, { FC, useState } from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Pictogram } from "../../../models";

const styles = StyleSheet.create({
  allergenContainer: {
    display: "flex",
    alignItems: "center",
    margin: 5,
  },
  allergenImage: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  selectedAllergenImage: {
    borderWidth: 2,
    borderColor: "#2196F3",
  },
  selectedAllergenText: {
    color: "#2196F3",
  },
});

type Props = {
  allergen: Pictogram;
  handleAllergensSelected: (
    allergen: Pictogram,
    allergensSelected: Pictogram[]
  ) => void;
  allergensSelected: Pictogram[];
};

export const Allergen: FC<Props> = (props: Props) => {
  const [isSelected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      key={props.allergen.id}
      style={styles.allergenContainer}
      onPress={() => {
        setSelected(!isSelected);
        props.handleAllergensSelected(props.allergen, props.allergensSelected);
        console.log(props.allergensSelected);
      }}
    >
      <Image
        source={{ uri: props.allergen.image }}
        style={
          isSelected
            ? [styles.allergenImage, styles.selectedAllergenImage]
            : styles.allergenImage
        }
      />
      <Text style={isSelected ? styles.selectedAllergenText : null}>
        {props.allergen.name}
      </Text>
    </TouchableOpacity>
  );
};
