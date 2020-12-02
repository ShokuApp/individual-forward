import React, { FC } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Recipe } from "../../models";

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 13,
    height: 196,
    borderRadius: 10,
  },
  container: {
    width: "100%",
    height: 200,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  recipeTitle: {
    marginLeft: 8,
    marginBottom: 10,
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerView: {
    position: "absolute",
    backgroundColor: "#fff",
    opacity: 0.75,
    marginTop: 140,
    width: "100%",
    height: 65,
  },
  view: {
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
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log("Attach display recipe details method")}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={imageSrc} />
        <View style={styles.containerView}>
          <View style={styles.view}>
            <Text style={styles.recipeTitle}>{recipe.name}</Text>
            <Icon
              style={{ marginRight: 8, marginBottom: 10, marginTop: 5 }}
              name="heart"
              type="font-awesome"
              size={15}
              color="#000"
              onPress={() => console.log("Attach favorite method")}
            />
          </View>
          <View style={styles.view}>
            <View style={styles.view}>
              <Icon
                style={{ marginLeft: 8 }}
                name="clock"
                type="feather"
                size={15}
                color="#000"
              />
              <Text style={{ marginLeft: 3, fontSize: 12 }}>
                {Math.round(recipe.average_time / 60)} min
              </Text>
            </View>
            <View style={styles.view}>
              <Text style={{ marginRight: 3 }}>{recipe.average_rate}</Text>
              <Icon
                style={{ marginRight: 8 }}
                name="star-o"
                type="font-awesome"
                size={15}
                color="#000"
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
