import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import { averagePrice } from "../../../helpers/restaurants/average-price";

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
  const numberIcons = averagePrice(price);
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
