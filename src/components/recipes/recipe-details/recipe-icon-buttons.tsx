import React, { FC } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { Recipe } from "../../../models";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width,
    marginVertical: 20,
  },
});

type Props = {
  recipe: Recipe;
};

export const RecipeIconButtons: FC<Props> = ({ recipe }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        {/* TODO: Use @Matttx 's UserButton component */}
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
        {/* TODO: Use @Matttx 's UserButton component */}
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
        {/* TODO: Use @Matttx 's UserButton component */}
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
        {/* TODO: Use @Matttx 's UserButton component */}
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
  );
};
