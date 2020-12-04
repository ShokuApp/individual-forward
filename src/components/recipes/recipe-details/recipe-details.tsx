import React, { FC, useState } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { RecipeDescription } from "./recipe-decription";
import { Divider } from "./divider";
import { RecipeIconButtons } from "./recipe-icon-buttons";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    top: height / 14,
    left: width / 15,
  },
  ingredientIcon: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
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
    height,
    width,
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
  bottomView: {
    backgroundColor: "#ECECEC",
    height,
    width,
  },
  scroll: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2196F3",
  },
  inputIngredient: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 80,
  },
  textNumber: {
    fontSize: 20,
    color: "#2196F3",
    marginHorizontal: 2,
  },
  ingredientSectionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: "#8A8A8A",
    paddingTop: 5,
    paddingLeft: 30,
  },
});

export const RecipeDetails: FC<Props> = ({ recipe }: Props) => {
  const imageSrc = { uri: recipe.image };
  const { goBack } = useNavigation();
  const [count, setCount] = useState(2);
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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <Text style={styles.recipeTitle}>{recipe.name}</Text>
          <RecipeDescription recipe={recipe} />
          <View style={styles.divider}>
            <Divider />
            {/*TODO: use @Matttx 's Divider component */}
          </View>
          <RecipeIconButtons recipe={recipe} />
          <View style={styles.bottomView}>
            <View style={styles.ingredientSectionTitle}>
              <Text style={styles.sectionTitle}>Ingrédients</Text>
              <Text style={styles.sectionSubtitle}>Nombre de personnes</Text>
              <View style={styles.inputIngredient}>
                <TouchableOpacity
                  style={styles.ingredientIcon}
                  onPress={() => {
                    if (count > 1) setCount(count - 1);
                  }}
                >
                  <Ionicons name="ios-remove" size={25} color="#2196F3" />
                </TouchableOpacity>
                <Text style={styles.textNumber}>{count}</Text>
                <TouchableOpacity
                  style={styles.ingredientIcon}
                  onPress={() => {
                    if (count < 99) setCount(count + 1);
                  }}
                >
                  <Ionicons name="ios-add" size={25} color="#2196F3" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
