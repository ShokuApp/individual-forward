import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from '../constant/colors';


export const ProfilScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeStandard,
    alignItems: "center",
    justifyContent: "center",
  },
});