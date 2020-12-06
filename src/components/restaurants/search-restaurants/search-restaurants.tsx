import React, { FC, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Pictogram } from "../../../models";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar, SearchButton } from "../../common";
import { MyCheckBox } from "./checkbox";
import { ScrollView } from "react-native-gesture-handler";
import { Allergen } from "./allergen";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
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
});

type Props = {
  allergens: Pictogram[];
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
  const allergensSelected: Pictogram[] = [];
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView>
        <SearchBar text={text} setText={setText} />
        <View style={styles.filterContainer}>
          <MyCheckBox label={"Pour moi"} check={forMe} setCheck={setForMe} />
          <Text style={styles.filterTitle}>Prix :</Text>
          <View style={styles.priceContainer}>
            <MyCheckBox label={"€"} check={lowPrice} setCheck={setLowPrice} />
            <MyCheckBox
              label={"€€"}
              check={middlePrice}
              setCheck={setMiddlePrice}
            />
            <MyCheckBox
              label={"€€€"}
              check={highPrice}
              setCheck={setHighPrice}
            />
          </View>
          <Text style={styles.filterTitle}>Allergènes :</Text>
          <View style={styles.allergensContainer}>
            {props.allergens.map((allergen) => (
              <Allergen
                key={allergen.id}
                allergen={allergen}
                handleAllergensSelected={handleAllergensSelected}
                allergensSelected={allergensSelected}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <SearchButton
        label={"Rechercher"}
        onPress={() => {
          console.log("profileAllergensOnly", forMe);
          navigate("Home", {
            screen: "RestaurantScreen",
            params: {
              screen: "Restaurants",
              params: {
                filters: {
                  label: text,
                  profileAllergensOnly: forMe,
                  price: { lowPrice, middlePrice, highPrice },
                  allergens: allergensSelected,
                },
              },
            },
          });
        }}
      />
    </SafeAreaView>
  );
};
