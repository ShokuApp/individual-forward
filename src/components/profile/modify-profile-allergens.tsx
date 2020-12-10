import React, { FC } from "react";
import { StyleSheet, View, Text, Dimensions, Platform } from "react-native";
import { Profile } from "../../models";
import { Pictogram } from "../../models";
import { Allergen } from "../common/allergen";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../constants/colors";
import { Button } from "../common";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  cardContainer: {
    alignItems: "center",
  },
  allergensContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    paddingBottom: 60,
  },
  title: {
    paddingTop: 30,
    paddingLeft: 10,
    fontSize: 20,
    color: colors.themeStandard,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 40,
    marginVertical: 10,
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
  const scrollStyle = {
    height: height * 0.8 + 30,
  };

  if (Platform.OS === "ios") {
    const { top, bottom } = useSafeAreaInsets();

    scrollStyle.height -= top + bottom;
  }
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView showsVerticalScrollIndicator={false} style={scrollStyle}>
        <Text style={styles.title}>Sélectionnez vos allergènes :</Text>
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
      <View style={styles.buttonContainer}>
        <Button label={"Appliquer"} onPress={() => alert("Todo!")} />
      </View>
    </SafeAreaView>
  );
};
