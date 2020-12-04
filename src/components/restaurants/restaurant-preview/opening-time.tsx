import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TimeRange } from "../../../models";

const styles = StyleSheet.create({
  textRight: {
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paragraph: {
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 10,
  },
});

type Props = {
  openingTimes: TimeRange[][];
};

const RestaurantPreviewOpeningTime: FC<Props> = ({ openingTimes }: Props) => {
  const now = new Date();
  const date = now.getDay();
  if (openingTimes[date].length === 0) {
    return <Text style={styles.textRight}>Fermé</Text>;
  } else if (openingTimes[date].length === 1) {
    return (
      <Text style={styles.textRight}>
        {openingTimes[date][0].from + " - " + openingTimes[date][0].to}
      </Text>
    );
  } else {
    return (
      <View style={styles.paragraph}>
        <Text>
          {openingTimes[date][0].from + " - " + openingTimes[date][0].to}
        </Text>
        <Text>
          {openingTimes[date][1].from + " - " + openingTimes[date][1].to}
        </Text>
      </View>
    );
  }
};

export default RestaurantPreviewOpeningTime;
