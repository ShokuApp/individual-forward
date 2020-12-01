import React from "react"
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from '../../constant/colors';


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
      <AntDesign
        name={"downcircleo"}
        size={32}
        style={{ color: isCurrent ? colors.themeStandard : "#CFD2D7" }}
      />
    </View>
  );
};