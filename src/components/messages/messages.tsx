import React, { FC } from "react";
import { Profile } from "../../models";
import { View, Text } from "react-native";

type Props = {
  profile: Profile;
};

export const Messages: FC<Props> = (props: Props) => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};
