import React, { FC, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Pictogram } from "../../../models";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar, Button } from "../../common";
import { MyCheckBox } from "../../common/checkbox";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { SearchBy, SEARCH_BY } from "./search-by";
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

export const SearchRestaurant: FC<Props> = (props: Props) => {
  const [text, setText] = useState("");
  const [lowPrice, setLowPrice] = useState(true);
  const [middlePrice, setMiddlePrice] = useState(true);
  const [highPrice, setHighPrice] = useState(true);
  const [isSearchBy, setSearchBy] = useState(SEARCH_BY.RESTAURANT);
  const [allergensSelected, setAllergensSelected] = useState([
    ...props.profileAllergens,
  ]);
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView>
        <SearchBy isSearchBy={isSearchBy} setSearchBy={setSearchBy} />
        <SearchBar text={text} setText={setText} />
        <View style={styles.filterContainer}>
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
        </View>
        <AllergenSelection
          allergensSelected={allergensSelected}
          setAllergensSelected={setAllergensSelected}
          allergens={props.allergens}
          profileAllergens={props.profileAllergens}
        />
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
