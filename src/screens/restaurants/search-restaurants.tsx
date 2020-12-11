import React, { FC } from "react";
import { BlocBuilder } from "@felangel/react-bloc";
import { Text } from "react-native";
import {
  PictogramBloc,
  PictogramListEvent,
  PictogramState,
  PictogramErrorState,
  PictogramListState,
  ProfileBloc,
  ProfileState,
  ProfileGetEvent,
  ProfileGetState,
  ProfileErrorState,
} from "../../blocs";
import { PictogramRepository, ProfileRepository } from "../../repositories";
import { SearchRestaurant } from "../../components/restaurants/search-restaurants/search-restaurants";
import { Profile } from "../../models";
import { id } from "../../constants/demo";

type Props = {
  profile: Profile;
};

const ProfileGet: FC<Props> = (props: Props) => {
  const allergensBloc = new PictogramBloc(new PictogramRepository());
  allergensBloc.add(new PictogramListEvent());
  return (
    <BlocBuilder
      bloc={allergensBloc}
      builder={(allergensState: PictogramState) => {
        if (allergensState instanceof PictogramErrorState) {
          return <Text>Error</Text>;
        }
        if (allergensState instanceof PictogramListState) {
          return (
            <SearchRestaurant
              allergens={allergensState.pictograms}
              profileAllergens={props.profile.allergens}
            />
          );
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

const SearchRestaurantScreen: FC = () => {
  const profileBloc = new ProfileBloc(new ProfileRepository());
  profileBloc.add(new ProfileGetEvent(id));
  return (
    <BlocBuilder
      bloc={profileBloc}
      builder={(profileState: ProfileState) => {
        if (profileState instanceof ProfileErrorState) {
          return <Text>Error</Text>;
        }
        if (profileState instanceof ProfileGetState) {
          return <ProfileGet profile={profileState.profile} />;
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

export default SearchRestaurantScreen;
