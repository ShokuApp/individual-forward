import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconLocation: {
    paddingRight: 2,
    paddingLeft: 8,
    paddingTop: 5,
  },
  address: {
    paddingTop: 0,
    paddingLeft: 5,
    fontSize: 10,
  },
  paragraph: {
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 10,
  },
});

type Props = {
  streetNumber: number;
  street: string;
  postalCode: string;
  city: string;
};

export const Location: FC<Props> = ({
  streetNumber,
  street,
  postalCode,
  city,
}: Props) => {
  return (
    <View style={styles.container}>
      <Icon
        name="map-marker"
        type="font-awesome"
        color="#000000"
        size={25}
        style={styles.iconLocation}
      />
      <View style={styles.paragraph}>
        <Text style={styles.address}>{streetNumber + " " + street}</Text>
        <Text style={styles.address}>{postalCode + " " + city}</Text>
      </View>
    </View>
  );
};
