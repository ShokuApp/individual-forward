import React, { FC } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Recipe } from "../../../models";
import { useNavigation } from "@react-navigation/native";

type Props = {
  recipe: Recipe;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    marginTop: 54,
    marginLeft: 24,
  },
  image: {
    width: "100%",
    height: "35%",
    position: "absolute",
  },
});

export const RecipeDetails: FC<Props> = ({ recipe }: Props) => {
  const imageSrc = { uri: recipe.image };
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSrc} />
      <View style={styles.icon}>
        <Icon
          name="close"
          type="material"
          color="#2196F3"
          reverse={true}
          onPress={() => {
            goBack();
          }}
        />
      </View>
    </View>
  );
};
