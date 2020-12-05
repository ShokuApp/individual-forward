import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  iconPrice: {
    paddingTop: 2,
  },
  viewPrice: {
    paddingRight: 8,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

type Props = {
  price: number;
};

const RestaurantPreviewPriceRange: FC<Props> = ({ price }: Props) => {
  let numberIcons;
  if (price < 15) {
    numberIcons = 1;
  } else if (price < 30) {
    numberIcons = 2;
  } else {
    numberIcons = 3;
  }
  const icons = [];
  for (let i = 0; i < numberIcons; i++) {
    icons.push(
      <Icon
        key={i}
        name="euro-symbol"
        type="material-icons"
        color="#000000"
        size={20}
        style={styles.iconPrice}
      />
    );
  }
  return <View style={styles.viewPrice}>{icons}</View>;
};

export default RestaurantPreviewPriceRange;
