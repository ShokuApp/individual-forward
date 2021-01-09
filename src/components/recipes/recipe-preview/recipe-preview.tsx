import React, { FC } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Recipe } from "../../../models";
import { RecipePreviewName } from "./name";
import { RecipePreviewFavorite } from "./favorite";
import { RecipePreviewPreparationTime } from "./preparation-time";
import { RecipePreviewRating } from "./rating";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    width: "100%",
    height: 200,
    marginVertical: 5,
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
  informationContainer: {
    position: "absolute",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#fff",
    opacity: 0.75,
    marginTop: 140,
    bottom: 0,
    width: "100%",
    height: 65,
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

type Props = {
  recipe: Recipe;
};

export const RecipePreview: FC<Props> = ({ recipe }: Props) => {
  const imageSrc = { uri: recipe.image };
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigate("Recipe", {
          screen: "RecipeDetails",
          params: { recipe },
        })
      }
    >
      <Image style={styles.image} source={imageSrc} />
      <View style={styles.informationContainer}>
        <View style={styles.descriptionContainer}>
          <RecipePreviewName name={recipe.name} />
          <RecipePreviewFavorite />
        </View>
        <View style={styles.descriptionContainer}>
          <RecipePreviewPreparationTime
            preparationTime={recipe.averageTime.preparation}
            cookingTime={recipe.averageTime.cooking}
          />
          <RecipePreviewRating averageRate={recipe.averageRate} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
