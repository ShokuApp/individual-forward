import React, { FC, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { alertForMe } from "./alerts";
import { MyCheckBox } from "./checkbox";
import { Pictogram } from "../../models";
import { Allergen } from "./allergen";

const styles = StyleSheet.create({
  filterContainer: {
    paddingHorizontal: 10,
  },
  filterTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  allergensContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

type Props = {
  setAllergensSelected: React.Dispatch<React.SetStateAction<Pictogram[]>>;
  allergensSelected: Pictogram[];
  allergens: Pictogram[];
  profileAllergens: Pictogram[];
  alertDisplay: string;
};

const handleAllergensSelected: (
  allergen: Pictogram,
  allergensSelected: Pictogram[]
) => void = (allergen, allergensSelected) => {
  if (allergensSelected.includes(allergen)) {
    const index = allergensSelected.indexOf(allergen);
    allergensSelected.splice(index, 1);
  } else {
    allergensSelected.push(allergen);
  }
};

export const AllergenSelection: FC<Props> = (props: Props) => {
  const [forMe, setForMe] = useState(true);

  useEffect(() => {
    if (forMe) {
      props.setAllergensSelected([...props.profileAllergens]);
    }
  }, [forMe]);

  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterTitle}>Allergènes :</Text>
      <MyCheckBox
        label={"Pour moi"}
        check={forMe}
        onPress={() => {
          if (forMe) {
            alertForMe(setForMe, props.alertDisplay);
          } else {
            setForMe(!forMe);
          }
        }}
      />
      <View style={styles.allergensContainer}>
        {props.allergens.map((allergen) => (
          <Allergen
            key={allergen.id}
            touchableDisable={forMe}
            allergen={allergen}
            handleAllergensSelected={handleAllergensSelected}
            allergensSelected={props.allergensSelected}
          />
        ))}
      </View>
    </View>
  );
};
