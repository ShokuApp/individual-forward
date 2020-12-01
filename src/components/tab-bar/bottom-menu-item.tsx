import React from "react"
import { View, SafeAreaView, StyleSheet, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from '../../constant/colors';
import images from '../../assets/icons/index';


type Props = {
  iconName: string;
  isCurrent?: boolean;
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 32,
    height: 32
  }
})

export const BottomMenuItem = ({ iconName, isCurrent }: Props) => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image style={styles.logo} source={images.tabBar.chefHat} />
    </View>
  );
};