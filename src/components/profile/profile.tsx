import React, { FC } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Profile } from "../../models";
import { Allergies } from "./allergies";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
  },
  profileContainer: {
    alignItems: "center",
    minHeight: 200,
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
  },
  borderImageContainer: {
    height: 145,
    width: 145,
    borderWidth: 3,
    borderRadius: 145 / 2,
    borderColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

type Props = {
  profile: Profile;
};

export const ProfileContainer: FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.borderImageContainer}>
          <Image
            style={styles.image}
            source={{ uri: "https://shoku.app/assets/img/team/anthonin.png" }}
          />
        </View>
        <Text style={styles.name}>
          {props.profile.firstName + " " + props.profile.lastName}
        </Text>
      </View>
      <Allergies profile={props.profile} />
    </View>
  );
};
