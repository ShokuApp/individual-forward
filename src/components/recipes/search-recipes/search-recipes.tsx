import React, { FC, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { SearchBar, Button } from "../../common";
import { Pictogram } from "../../../models";
import { AllergenSelection } from "../../common/allergen-selection";

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

export const SearchRecipe: FC<Props> = (props: Props) => {
  const [text, setText] = useState("");
  const [allergensSelected, setAllergensSelected] = useState([
    ...props.profileAllergens,
  ]);

  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView>
        <SearchBar text={text} setText={setText} />
        <AllergenSelection
          allergensSelected={allergensSelected}
          setAllergensSelected={setAllergensSelected}
          allergens={props.allergens}
          profileAllergens={props.profileAllergens}
          alertDisplay={
            "Les recettes proposées pourraient ne plus être sûres pour vous"
          }
        />
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
