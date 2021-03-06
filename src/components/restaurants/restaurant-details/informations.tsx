import React, { FC } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { InformationSubtitle } from "./information-subtitle";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  informationRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  labelContainer: {
    width: width / 2.5,
    flexShrink: 1,
  },
  typeContainer: {
    alignItems: "flex-end",
  },
  informationLabel: {
    fontSize: 14,
  },
});

type Props = {
  address: string;
  type: string;
  hours: string;
  note: number;
};

export const Informations: FC<Props> = ({
  address,
  type,
  hours,
  note,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.informationRow}>
        <View>
          <InformationSubtitle label="Adresse" />
          <Text style={styles.labelContainer}>{address}</Text>
        </View>
        <View style={[styles.typeContainer, styles.labelContainer]}>
          <InformationSubtitle label="Type" />
          <Text style={styles.typeContainer}>{type}</Text>
        </View>
      </View>
      <View style={styles.informationRow}>
        <View>
          <InformationSubtitle label="Horaire" />
          <Text style={styles.labelContainer}>{hours}</Text>
        </View>
        <View style={[styles.typeContainer, styles.labelContainer]}>
          <InformationSubtitle label="Note" />
          <Text style={styles.typeContainer}>{note.toString() + "/5"}</Text>
        </View>
      </View>
    </View>
  );
};
