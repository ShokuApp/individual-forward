import React, { useState, useEffect, FC } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Animated,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabBarItem } from "./tab-bar-item";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.0,
    backgroundColor: "white",
    elevation: 10,
    bottom: 0,
  },
  slider: {
    height: 5,
    position: "absolute",
    top: 0,
    left: 28,
    backgroundColor: colors.themeStandard,
    borderRadius: 20,
    width: 30,
  },
});

export const TabBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
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

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.slider,
          {
            transform: [{ translateX: translateValue }],
            width: tabWidth - 60,
          },
        ]}
      />
      {state.routes.map((route, index) => {
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
      })}
    </View>
  );
};
