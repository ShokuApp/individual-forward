import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import RestaurantPreviewOpeningTime from "./opening-time";
import { TimeRange } from "../../../models";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconText: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
});

type Props = {
  openingTimes: TimeRange[][];
};

export const Schedule: FC<Props> = ({ openingTimes }: Props) => {
  return (
    <View style={styles.container}>
      <Icon
        name="clock"
        type="feather"
        color="#000000"
        size={20}
        style={styles.iconText}
      />
      <RestaurantPreviewOpeningTime openingTimes={openingTimes} />
    </View>
  );
};
