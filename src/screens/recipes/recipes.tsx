import React, { FC } from "react";
import { BlocBuilder } from "@felangel/react-bloc";
import {
  PictogramBloc,
  PictogramErrorState,
  PictogramListEvent,
  PictogramListState,
  PictogramState,
  ProfileBloc,
  ProfileErrorState,
  ProfileGetEvent,
  ProfileGetState,
  ProfileState,
  RecipeBloc,
  RecipeErrorState,
  RecipeListEvent,
  RecipeListState,
  RecipeState,
} from "../../blocs";
import {
  PictogramRepository,
  ProfileRepository,
  RecipeRepository,
} from "../../repositories";
import { Text } from "react-native";
import { v4 as uuid } from "uuid";
import { ListRecipePreview } from "../../components/recipes/recipe-preview/list-recipe-preview";
import { RouteProp } from "@react-navigation/native";
import {
  Filters,
  RecipesStackParamsList,
} from "../../components/bottom-tab-navigator";
import { Profile, Recipe } from "../../models";
import { id } from "../../constants/demo";

type RecipeScreenProps = RouteProp<RecipesStackParamsList, "Recipes">;

type ProfileProps = {
  profile: Profile;
  recipes: Recipe[];
  filters: Filters;
};
type Props = {
  route: RecipeScreenProps;
};

const ProfileGet: FC<ProfileProps> = (props: ProfileProps) => {
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
            <ListRecipePreview
              recipes={props.recipes}
              filters={props.filters || props.profile.allergens}
            />
          );
        }
        return <Text>Loading</Text>;
      }}
    />
  );
};

const RecipesScreen: FC<Props> = ({ route }: Props) => {
  const recipeBloc = new RecipeBloc(new RecipeRepository());
  recipeBloc.add(new RecipeListEvent());
  const profileBloc = new ProfileBloc(new ProfileRepository());
  profileBloc.add(new ProfileGetEvent(id));

  return (
    <BlocBuilder
      key={uuid()}
      bloc={recipeBloc}
      builder={(state: RecipeState) => {
        if (state instanceof RecipeErrorState) {
          return <Text>Error</Text>;
        }

        if (state instanceof RecipeListState) {
          return (
            <BlocBuilder
              bloc={profileBloc}
              builder={(profileState: ProfileState) => {
                if (profileState instanceof ProfileErrorState) {
                  return <Text>Error</Text>;
                }
                if (profileState instanceof ProfileGetState) {
                  return (
                    <ProfileGet
                      profile={profileState.profile}
                      recipes={state.recipes}
                      filters={route.params?.filters}
                    />
                  );
                }
                return <Text>Loading</Text>;
              }}
            />
          );
        }

        return <Text>Loading...</Text>;
      }}
    />
  );
};

export default RecipesScreen;
