import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import React, { FC } from "react";

const styles = StyleSheet.create({
  icon: {
    marginRight: 8,
    marginBottom: 10,
    marginTop: 5,
  },
});

const RecipePreviewFavorite: FC = () => {
  return (
    <Icon
      style={styles.icon}
      name="heart"
      type="font-awesome"
      size={15}
      color="#000"
    />
  );
};

export default RecipePreviewFavorite;
