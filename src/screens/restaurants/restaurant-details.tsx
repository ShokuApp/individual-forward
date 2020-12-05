import React, { FC } from "react";
import { Text } from "react-native";

import { RouteProp } from "@react-navigation/native";
import { RestaurantStackParamList } from "../../navigator/restaurant-details-navigator";
import { BlocBuilder } from "@felangel/react-bloc";
import {
  ProfileBloc,
  ProfileGetEvent,
  ProfileState,
  ProfileErrorState,
  ProfileInitialState,
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

const RestaurantDetailsError: FC = () => {
  return <Text>Error</Text>;
};

const RestaurantDetailsInitial: FC = () => {
  return <Text>Loading</Text>;
};

const RestaurantDetailsLoading: FC = () => {
  return <Text>Loading</Text>;
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
          return <RestaurantDetailsError />;
        }
        if (state instanceof ProfileInitialState) {
          return <RestaurantDetailsInitial />;
        }
        if (state instanceof ProfileGetState) {
          return (
            <RestaurantDetails
              restaurant={route.params.restaurant}
              profile={(state as ProfileGetState).profile}
            />
          );
        }
        return <RestaurantDetailsLoading />;
      }}
    />
  );
};

export default RestaurantDetailsScreen;
