import React, { FC, useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Pictogram } from "../../../models";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar, Button } from "../../common";
import { MyCheckBox } from "./checkbox";
import { ScrollView } from "react-native-gesture-handler";
import { Allergen } from "./allergen";
import { useNavigation } from "@react-navigation/native";
import { SearchBy, SEARCH_BY } from "./search-by";
import { alertForMe } from "./alerts";

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

export const SearchRestaurant: FC<Props> = (props: Props) => {
  const [text, setText] = useState("");
  const [forMe, setForMe] = useState(true);
  const [lowPrice, setLowPrice] = useState(true);
  const [middlePrice, setMiddlePrice] = useState(true);
  const [highPrice, setHighPrice] = useState(true);
  const [isSearchBy, setSearchBy] = useState(SEARCH_BY.RESTAURANT);
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
        <SearchBy isSearchBy={isSearchBy} setSearchBy={setSearchBy} />
        <SearchBar text={text} setText={setText} />
        <View style={styles.filterContainer}>
          <MyCheckBox
            label={"Pour moi"}
            check={forMe}
            onPress={() => {
              if (forMe) {
                alertForMe(setForMe);
              } else {
                setForMe(!forMe);
              }
            }}
          />
          <Text style={styles.filterTitle}>Prix :</Text>
          <View style={styles.priceContainer}>
            <MyCheckBox
              label={"€"}
              check={lowPrice}
              onPress={() => setLowPrice(!lowPrice)}
            />
            <MyCheckBox
              label={"€€"}
              check={middlePrice}
              onPress={() => setMiddlePrice(!middlePrice)}
            />
            <MyCheckBox
              label={"€€€"}
              check={highPrice}
              onPress={() => setHighPrice(!highPrice)}
            />
          </View>
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
              screen: "RestaurantScreen",
              params: {
                screen: "Restaurants",
                params: {
                  filters: {
                    label: text,
                    searchBy: isSearchBy,
                    price: { lowPrice, middlePrice, highPrice },
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
