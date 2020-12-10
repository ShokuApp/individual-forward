import React, { FC } from "react";
import { Text } from "react-native";

import { RouteProp } from "@react-navigation/native";
import { RestaurantStackParamList } from "../../navigator/restaurants-navigator";
import { BlocBuilder } from "@felangel/react-bloc";
import {
  ProfileBloc,
  ProfileErrorState,
  ProfileGetEvent,
  ProfileGetState,
  ProfileState,
} from "../../blocs";
import { ProfileRepository } from "../../repositories";
import { RestaurantDetails } from "../../components/restaurants/restaurant-details";

type RestaurantDetailsScreenProps = RouteProp<
  RestaurantStackParamList,
  "RestaurantDetailsScreen"
>;

type Props = {
  route: RestaurantDetailsScreenProps;
};

const RestaurantDetailsScreen: FC<Props> = ({ route }: Props) => {
  const id = "60bc28d6-c853-41bc-b6e0-473547fe3b1e";
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
          return (
            <RestaurantDetails
              restaurant={route.params.restaurant}
              profile={state.profile}
            />
          );
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

export default RestaurantDetailsScreen;
