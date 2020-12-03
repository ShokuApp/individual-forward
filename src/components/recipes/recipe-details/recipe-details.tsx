import React, { FC } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Recipe } from "../../../models";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { RecipeDescription } from "./recipe-decription";
import { Divider } from "./divider";
import { RecipeIconButtons } from "./recipe-icon-buttons";

type Props = {
  recipe: Recipe;
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeIcon: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: height / 11,
    left: width / 15,
  },
  image: {
    width: "100%",
    height: "35%",
  },
  cardView: {
    top: -30,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    height: height,
    width: width,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2196F3",
    marginTop: 10,
    textAlign: "center",
  },
  divider: {
    alignItems: "center",
  },
});

export const RecipeDetails: FC<Props> = ({ recipe }: Props) => {
  const imageSrc = { uri: recipe.image };
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSrc} />
      <View style={styles.closeIcon}>
        <AntDesign
          name="close"
          size={25}
          color="white"
          onPress={() => {
            goBack();
          }}
        />
      </View>
      <View style={styles.cardView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.recipeTitle}>{recipe.name}</Text>
          <RecipeDescription recipe={recipe} />
          <View style={styles.divider}>
            <Divider />
          </View>
          <RecipeIconButtons recipe={recipe} />
        </ScrollView>
      </View>
    </View>
  );
};
