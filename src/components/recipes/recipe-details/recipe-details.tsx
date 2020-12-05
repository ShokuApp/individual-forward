import React, { FC, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import { Recipe } from "../../../models";
import { useNavigation } from "@react-navigation/native";
import { RecipeDescription } from "./recipe-decription";
import { Divider } from "./divider";
import { RecipeIconButtons } from "./recipe-icon-buttons";
import { RecipeNumberInput } from "./recipe-number-input";
import { RecipeIngredients } from "./recipe-ingredients";
import { SafeAreaView } from "react-native-safe-area-context";
import { RecipeStepsList } from "./recipe-step-list";

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
  image: {
    width,
    height: height / 5,
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
    marginBottom: 20,
    textAlign: "center",
  },
  divider: {
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: "#ECECEC",
    paddingBottom: 150,
  },
  scroll: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  listContainer: {
    marginTop: 10,
    width: (90 * width) / 100,
    borderRadius: 10,
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2196F3",
    marginTop: 15,
    marginLeft: 15,
    alignSelf: "flex-start",
  },
  descriptionContainer: {
    backgroundColor: "white",
  },
});

type Props = {
  recipe: Recipe;
};

export const RecipeDetails: FC<Props> = ({ recipe }: Props) => {
  const imageSrc = { uri: recipe.image };
  const { goBack } = useNavigation();
  const [count, setCount] = useState(2);
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={imageSrc} />
      <View style={styles.closeIcon}>
        <Icon
          type="antdesign"
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
          <View style={styles.descriptionContainer}>
            <Text style={styles.recipeTitle}>{recipe.name}</Text>
            <RecipeDescription recipe={recipe} />
            <View style={styles.divider}>
              <Divider />
              {/*TODO: use @Matttx 's Divider component */}
            </View>
            <View style={styles.divider} />
            <RecipeIconButtons recipe={recipe} />
          </View>
          <View style={styles.contentContainer}>
            <RecipeNumberInput
              count={count}
              minusClick={() => {
                if (count > 1) setCount(count - 1);
              }}
              addClick={() => {
                if (count < 99) setCount(count + 1);
              }}
            />
            <View style={styles.listContainer}>
              <RecipeIngredients
                ingredients={recipe.ingredients}
                nbPeople={count}
              />
            </View>
            <Text style={styles.sectionTitle}>Préparation</Text>
            <View style={styles.listContainer}>
              <RecipeStepsList steps={recipe.steps} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
