import React, { FC, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Pictogram } from "../../models";
import { alertAllergen } from "./alerts";

const styles = StyleSheet.create({
  allergenContainer: {
    display: "flex",
    alignItems: "center",
    width: "25%",
    margin: 5,
  },
  allergenImage: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  allergenText: {
    color: "black",
  },
  selectedAllergenImage: {
    borderWidth: 2,
    borderColor: "#2196F3",
  },
  selectedAllergenText: {
    color: "#2196F3",
  },
  disabledAllergen: {
    opacity: 0.5,
  },
});

type Props = {
  allergen: Pictogram;
  touchableDisable: boolean;
  handleAllergensSelected: (
    allergen: Pictogram,
    allergensSelected: Pictogram[]
  ) => void;
  allergensSelected: Pictogram[];
};

export const Allergen: FC<Props> = (props: Props) => {
  const [isSelected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(props.allergensSelected.includes(props.allergen));
  }, [props.allergensSelected]);
  return (
    <TouchableOpacity
      key={props.allergen.id}
      style={styles.allergenContainer}
      onPress={() => {
        if (props.touchableDisable) {
          alertAllergen();
        } else {
          setSelected(!isSelected);
          props.handleAllergensSelected(
            props.allergen,
            props.allergensSelected
          );
        }
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
      <Text
        style={isSelected ? styles.selectedAllergenText : styles.allergenText}
      >
        {props.allergen.name}
      </Text>
    </TouchableOpacity>
  );
};
