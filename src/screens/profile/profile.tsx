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
import { Allergies } from "../../components/profile/allergies";

const ProfileScreen: FC = () => {
  const id = "771a455b-6131-4d83-a934-59e3bab5303c";
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
          return <Allergies profile={state.profile} />;
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

export default ProfileScreen;
