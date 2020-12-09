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
import { SearchRecipe } from "../../components/recipes/search-recipes/search-recipes";
import { Profile } from "../../models";

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
            <SearchRecipe
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

const SearchRecipeScreen: FC = () => {
  const profileBloc = new ProfileBloc(new ProfileRepository());
  profileBloc.add(new ProfileGetEvent("e57a085b-ac14-4ceb-9978-83497bb17c7d"));
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

export default SearchRecipeScreen;
