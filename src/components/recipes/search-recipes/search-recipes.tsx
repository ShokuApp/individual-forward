import React, { FC, useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { SearchBar, Button } from "../../common";
import { alertForMe } from "../../common/alerts";
import { MyCheckBox } from "../../restaurants/search-restaurants/checkbox";
import { Pictogram } from "../../../models";
import { Allergen } from "../../restaurants/search-restaurants/allergen";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  filterContainer: {
    paddingHorizontal: 10,
  },
  filterTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  allergensContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  searchButton: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 30,
  },
});

type Props = {
  allergens: Pictogram[];
  profileAllergens: Pictogram[];
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

export const SearchRecipe: FC<Props> = (props: Props) => {
  const [text, setText] = useState("");
  const [forMe, setForMe] = useState(true);
  const [allergensSelected, setAllergensSelected] = useState([
    ...props.profileAllergens,
  ]);

  const { navigate } = useNavigation();

  useEffect(() => {
    if (forMe) {
      setAllergensSelected([...props.profileAllergens]);
    }
  }, [forMe]);

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView>
        <SearchBar text={text} setText={setText} />
        <View style={styles.filterContainer}>
          <MyCheckBox
            label={"Pour moi"}
            check={forMe}
            onPress={() => {
              if (forMe) {
                alertForMe(
                  setForMe,
                  "Les recettes proposées pourraient ne plus être sûrs pour vous"
                );
              } else {
                setForMe(!forMe);
              }
            }}
          />
          <Text style={styles.filterTitle}>Allergènes :</Text>
          <View style={styles.allergensContainer}>
            {props.allergens.map((allergen) => (
              <Allergen
                key={allergen.id}
                touchableDisable={forMe}
                allergen={allergen}
                handleAllergensSelected={handleAllergensSelected}
                allergensSelected={allergensSelected}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.searchButton}>
        <Button
          label={"Rechercher"}
          onPress={() => {
            navigate("Home", {
              screen: "RecipeScreen",
              params: {
                screen: "Recipes",
                params: {
                  filters: {
                    label: text,
                    allergens: allergensSelected,
                  },
                },
              },
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};
