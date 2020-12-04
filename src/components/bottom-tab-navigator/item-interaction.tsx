import React, { useState, useEffect, FC } from "react";
import { TouchableOpacity, Dimensions, Animated } from "react-native";
import { Route } from "@react-navigation/native";
import { TabBarItem } from "./tab-bar-item";
import {
  NavigationHelpers,
  NavigationState,
  ParamListBase,
  PartialState,
  TabNavigationState,
} from "@react-navigation/native";
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";

type NavigationRoute<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList
> = Route<Extract<RouteName, string>, ParamList[RouteName]> & {
  state?: NavigationState | PartialState<NavigationState>;
};

type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  state: TabNavigationState<Record<string, object | undefined>>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<
    // eslint-disable-next-line @typescript-eslint/ban-types
    Record<string, object | undefined>,
    BottomTabNavigationEventMap
  >;
  // eslint-disable-next-line @typescript-eslint/ban-types
  route: NavigationRoute<ParamListBase, keyof ParamListBase>;
  index: number;
};
const ItemInteraction: FC<Props> = ({
  state,
  descriptors,
  navigation,
  route,
  index,
}: Props) => {
  const totalWidth = Dimensions.get("window").width;
  const tabWidth = totalWidth / state.routes.length;
  const [translateValue] = useState(new Animated.Value(0));

  const animateSlider = (index: number) => {
    Animated.spring(translateValue, {
      toValue: index * tabWidth,
      velocity: 10,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateSlider(state.index);
  }, [state.index]);

  const { options } = descriptors[route.key];

  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
    Animated.spring(translateValue, {
      toValue: index * tabWidth,
      velocity: 10,
      useNativeDriver: true,
    }).start();
  };

  const onLongPress = () => {
    navigation.emit({
      type: "tabLongPress",
      target: route.key,
    });
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}
      key={index}
    >
      <TabBarItem iconName={label.toString()} isCurrent={isFocused} />
    </TouchableOpacity>
  );
};

export default ItemInteraction;
