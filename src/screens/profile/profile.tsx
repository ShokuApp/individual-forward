import React, { FC } from "react";
import { Text } from "react-native";
import { BlocBuilder } from "@felangel/react-bloc";
import {
  ProfileBloc,
  ProfileErrorState,
  ProfileGetEvent,
  ProfileGetState,
  ProfileState,
} from "../../blocs";
import { ProfileRepository } from "../../repositories";
import { ProfileContainer } from "../../components/profile/profile";
import { id } from "../../constants/demo";

const ProfileScreen: FC = () => {
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
          return <ProfileContainer profile={state.profile} />;
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

export default ProfileScreen;
