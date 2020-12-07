import React, { FC, useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { Recipe } from "../../../models";
import { useNavigation } from "@react-navigation/native";
import { RecipeDescription } from "./recipe-decription";
import { Divider } from "../../common";
import { RecipeNumberInput } from "./recipe-number-input";
import { RecipeIngredients } from "./recipe-ingredients";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { RecipeStepsList } from "./recipe-step-list";
import { UserButtons } from "./user-buttons";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  image: {
    height: height * 0.2,
    backgroundColor: "gray",
  },
  closeIcon: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: height / 14,
    left: width / 15,
  },
  roundedContainer: {
    flexGrow: 1,
    top: -30,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    color: "#2196F3",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  sectionContainer: {
    width: "100%",
    backgroundColor: "#ECECEC",
    alignItems: "center",
  },
  sectionTitleContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2196F3",
  },
  sectionSubContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
  },
});

type Props = {
  recipe: Recipe;
};

export const RecipeDetails: FC<Props> = ({ recipe }: Props) => {
  const scrollStyle = {
    height: height * 0.8 + 30,
  };

  if (Platform.OS === "ios") {
    const { top, bottom } = useSafeAreaInsets();

    scrollStyle.height -= top + bottom;
  }

  const imageSrc = { uri: recipe.image };
  const { goBack } = useNavigation();
  const [count, setCount] = useState(2);
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={imageSrc} />
      <TouchableOpacity style={styles.closeIcon} onPress={() => goBack()}>
        <Icon name="close" type={"antdesign"} size={25} color="white" />
      </TouchableOpacity>
      <View style={styles.roundedContainer}>
        <ScrollView showsVerticalScrollIndicator={false} style={scrollStyle}>
          <Text style={styles.title}>{recipe.name}</Text>
          <RecipeDescription recipe={recipe} />
          <Divider width={"80%"} color={"#DADADA"} />
          <UserButtons />
          <View style={styles.sectionContainer}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Ingrédients</Text>
              <RecipeNumberInput
                count={count}
                minusClick={() => {
                  if (count > 1) setCount(count - 1);
                }}
                addClick={() => {
                  if (count < 99) setCount(count + 1);
                }}
              />
            </View>
            <View style={styles.sectionSubContainer}>
              <RecipeIngredients
                ingredients={recipe.ingredients}
                nbPeople={count}
              />
            </View>
          </View>
          <View style={[styles.sectionContainer, { height: "100%" }]}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Préparation</Text>
            </View>
            <View style={[styles.sectionSubContainer, { marginBottom: 20 }]}>
              <RecipeStepsList steps={recipe.steps} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
