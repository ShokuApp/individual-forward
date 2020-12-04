import React, { FC } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import { Recipe } from "../../../models";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { RecipeSteps } from "./recipe-steps";

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
  },
  stepsContainer: {
    width: (90 * width) / 100,
    borderRadius: 10,
    backgroundColor: "white",
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
      <View style={styles.stepsContainer}>
        {recipe.steps.map((step) => {
          return <RecipeSteps step={step} key={step.name} />;
        })}
      </View>
    </View>
  );
};
