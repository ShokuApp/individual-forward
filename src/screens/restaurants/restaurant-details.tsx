import React, { FC } from "react";
import { Text } from "react-native";

import { RouteProp } from "@react-navigation/native";
import { RestaurantStackParamList } from "../../navigator/restaurant-details-navigator";
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
  const id = "129e5ebe-aaab-48f0-a1f5-31409a2fc11d";
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
              profile={(state as ProfileGetState).profile}
            />
          );
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

export default RestaurantDetailsScreen;
