import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

const ProfileScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Profil</Text>
    </View>
  );
};

export default ProfileScreen;
