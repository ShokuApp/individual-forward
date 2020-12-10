import React, { FC } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Profile } from "../../models";
import { Pictogram } from "../../models";
import { Allergen } from "../restaurants/search-restaurants/allergen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "#ECECEC",
  },
  cardContainer: {
    alignItems: "center",
  },
  allergenCard: {
    width: "90%",
    height: Dimensions.get("window").height / 1.8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
  },
  allergensContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  title: {
    paddingLeft: 10,
    fontSize: 20,
    color: colors.themeStandard,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

type ProfileProps = {
  allergens: Pictogram[];
  profile: Profile;
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

export const ModifyProfileAllergens: FC<ProfileProps> = ({
  profile,
  allergens,
}: ProfileProps) => {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Text style={styles.title}>Sélectionnez vos allergènes :</Text>
      <View style={styles.cardContainer}>
        <View style={styles.allergenCard}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.allergensContainer}>
              {allergens.map((allergen) => (
                <Allergen
                  key={allergen.id}
                  touchableDisable={false}
                  allergen={allergen}
                  handleAllergensSelected={handleAllergensSelected}
                  allergensSelected={profile.allergens}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
