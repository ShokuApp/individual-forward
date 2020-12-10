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
import { RouteProp } from "@react-navigation/native";
import { ModifyProfileAllergensStackParamList } from "../../navigator/modify-profile-allergens-navigator";
import { ModifyProfileAllergens } from "../../components/profile/modify-profile-allergens";
import { PictogramRepository } from "../../repositories";

type ModifyProfileAllergensScreenProps = RouteProp<
  ModifyProfileAllergensStackParamList,
  "ModifyProfileAllergens"
>;

type Props = {
  route: ModifyProfileAllergensScreenProps;
};

const ModifyProfileAllergensScreen: FC<Props> = ({ route }: Props) => {
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
            <ModifyProfileAllergens
              allergens={allergensState.pictograms}
              profile={route.params.profile}
            />
          );
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

export default ModifyProfileAllergensScreen;
