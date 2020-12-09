import React, { FC } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Profile } from "../../models";
import { AllergensList } from "./allergens-list";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  allergiesTitle: {
    paddingVertical: 20,
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textModify: {
    color: "#C4C4C4",
    fontSize: 16,
  },
  textAllergy: {
    color: "#2196F3",
    fontSize: 20,
  },
});

type ProfileProps = {
  profile: Profile;
};

export const Allergies: FC<ProfileProps> = ({ profile }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.allergiesTitle}>
        <Text style={styles.textAllergy}>Allergies</Text>
        <TouchableOpacity
          onPress={() => {
            alert("To do");
          }}
        >
          <Text style={styles.textModify}>Modifier</Text>
        </TouchableOpacity>
      </View>
      <AllergensList profile={profile} />
    </View>
  );
};
