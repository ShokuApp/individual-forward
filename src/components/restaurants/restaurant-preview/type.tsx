import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconRestaurant: {
    paddingRight: 7,
    paddingLeft: 5,
    paddingTop: 5,
  },
  textLeft: {
    paddingTop: 5,
    paddingRight: 2,
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

type Props = {
  description: string;
};

const RestaurantPreviewType: FC<Props> = ({ description }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLeft}>{description}</Text>
      <Icon
        name="local-dining"
        type="material-icon"
        color="#000000"
        size={20}
        style={styles.iconRestaurant}
      />
    </View>
  );
};

export default RestaurantPreviewType;
