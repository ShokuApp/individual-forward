import React, { FC } from "react";
import { Text } from "react-native";

import { RouteProp } from "@react-navigation/native";
import { RestaurantStackParamList } from "../../app";
import { BlocBuilder } from "@felangel/react-bloc";
import {
  ProfileBloc,
  ProfileGetEvent,
  ProfileState,
  ProfileErrorState,
  ProfileInitialState,
  ProfileLoadingState,
  ProfileGetState,
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
  const id = "07be4ee4-417a-4a10-9e82-c7ec9b219dff";
  const profilBloc = new ProfileBloc(new ProfileRepository());
  profilBloc.add(new ProfileGetEvent(id));
  return (
    <BlocBuilder
      bloc={profilBloc}
      builder={(state: ProfileState) => {
        if (state instanceof ProfileErrorState) {
          return <Text>Error</Text>;
        }
        if (state instanceof ProfileInitialState) {
          return <Text>Loading</Text>;
        }
        if (state instanceof ProfileLoadingState) {
          return <Text>Loading</Text>;
        }
        return (
          <RestaurantDetails
            restaurant={route.params.restaurant}
            profile={(state as ProfileGetState).profile}
          />
        );
      }}
    />
  );
};

export default RestaurantDetailsScreen;
