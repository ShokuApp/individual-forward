import React from "react"
import { View, SafeAreaView, StyleSheet, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from '../../constant/colors';
import images from './index';


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
  const icon = isCurrent ? images.tabBar[iconName].onSelected : images.tabBar[iconName].notSelected;
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image style={styles.logo} source={icon} />
    </View>
  );
};