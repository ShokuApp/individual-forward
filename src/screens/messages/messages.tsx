import React, { FC } from "react";
import {
  ProfileBloc,
  ProfileErrorState,
  ProfileGetEvent,
  ProfileGetState,
  ProfileState,
} from "../../blocs/profile";
import { ProfileRepository } from "../../repositories";
import { id } from "../../constants/demo";
import { BlocBuilder } from "@felangel/react-bloc";
import { Text } from "react-native";
import { Messages } from "../../components/messages/messages";

const MessagesScreen: FC = () => {
  const profileBloc = new ProfileBloc(new ProfileRepository());
  profileBloc.add(new ProfileGetEvent(id));
  return (
    <BlocBuilder
      bloc={profileBloc}
      builder={(state: ProfileState) => {
        if (state instanceof ProfileErrorState) {
          return <Text>Error</Text>;
        }
        if (state instanceof ProfileGetState) {
          return <Messages profile={state.profile} />;
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

export default MessagesScreen;
