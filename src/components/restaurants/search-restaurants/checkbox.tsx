import React, { FC } from "react";
import { CheckBox } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { alertForMe } from "./alerts";

const styles = StyleSheet.create({
  checkbox: {
    borderWidth: 0,
    backgroundColor: "white",
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  checkboxTitle: {
    fontWeight: "normal",
    fontSize: 15,
  },
  checkIcon: {
    height: 17,
    width: 17,
    borderRadius: 5,
    borderColor: "#2196F3",
    borderWidth: 1,
  },
});

type Props = {
  label: string;
  check: boolean;
  setCheck: (check: boolean) => void;
};

export const MyCheckBox: FC<Props> = (props: Props) => {
  return (
    <CheckBox
      containerStyle={styles.checkbox}
      textStyle={styles.checkboxTitle}
      title={props.label}
      checked={props.check}
      checkedIcon={
        <View style={[styles.checkIcon, { backgroundColor: "#2196F3" }]} />
      }
      uncheckedIcon={<View style={styles.checkIcon} />}
      onPress={() => {
        if (props.label === "Pour moi" && props.check) {
          alertForMe(props.setCheck);
        } else {
          props.setCheck(!props.check);
        }
      }}
    />
  );
};
