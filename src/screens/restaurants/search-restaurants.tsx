import React, { FC } from "react";
import { BlocBuilder } from "@felangel/react-bloc";
import { Text } from "react-native";
import {
  PictogramBloc,
  PictogramListEvent,
  PictogramState,
  PictogramErrorState,
  PictogramListState,
} from "../../blocs";
import { PictogramRepository } from "../../repositories";
import { SearchRestaurant } from "../../components/restaurants/search-restaurants/search-restaurants";

const SearchRestaurantScreen: FC = () => {
  const allergensBloc = new PictogramBloc(new PictogramRepository());
  allergensBloc.add(new PictogramListEvent());
  return (
    <BlocBuilder
      bloc={allergensBloc}
      builder={(state: PictogramState) => {
        if (state instanceof PictogramErrorState) {
          return <Text>Error</Text>;
        }
        if (state instanceof PictogramListState) {
          return <SearchRestaurant allergens={state.pictograms} />;
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

export default SearchRestaurantScreen;
