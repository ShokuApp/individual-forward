import React, { FC } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { Recipe } from "../../../models";

type Props = {
  recipe: Recipe;
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: width,
    marginVertical: 20,
  },
  divider: {
    width: width,
    backgroundColor: "#DADADA",
    height: 1,
  },
});

export const RecipeIconButtons: FC<Props> = ({ recipe }: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Icon
            name="heart-o"
            type="font-awesome"
            size={30}
            color="#2196F3"
            onPress={() => {
              console.log("Attach fav method");
            }}
          />
          <Text>Favoris</Text>
        </View>
        <View>
          <Icon
            name="comment-o"
            type="font-awesome"
            size={30}
            color="#2196F3"
            onPress={() => {
              console.log("Attach comment method");
            }}
          />
          <Text>Commenter</Text>
        </View>
        <View>
          <Icon
            name="star-o"
            type="font-awesome"
            size={30}
            color="#2196F3"
            onPress={() => {
              console.log("Attach rate method");
            }}
          />
          <Text>Noter</Text>
        </View>
        <View>
          <Icon
            name="share-square-o"
            type="font-awesome"
            size={30}
            color="#2196F3"
            onPress={() => {
              console.log("Attach share method");
            }}
          />
          <Text>Partager</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};
