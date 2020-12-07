import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconRate: {
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  textMark: {
    paddingTop: 5,
    fontSize: 10,
    color: "#2196F3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

type Props = {
  rate: number;
};

const RestaurantPreviewRating: FC<Props> = ({ rate }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textMark}>{rate}</Text>
      <Icon
        name="star"
        type="font-awesome"
        color="#2196F3"
        size={20}
        style={styles.iconRate}
      />
    </View>
  );
};

export default RestaurantPreviewRating;
