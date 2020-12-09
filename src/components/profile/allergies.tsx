import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Profile } from "../../models";
import { AllergensList } from "./allergens-list";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

type ProfileProps = {
  profile: Profile;
};

export const Allergies: FC<ProfileProps> = ({ profile }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <AllergensList profile={profile} />
    </View>
  );
};
