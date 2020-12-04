import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RecipePreview } from "./recipe-preview";
import {
  RecipeBloc,
  RecipeListEvent,
  RecipeListState,
  RecipeState,
} from "../../blocs";
import { RecipeRepository } from "../../repositories";
import { BlocBuilder } from "@felangel/react-bloc";
import { RecipeSearch } from "./search";
import { Recipe } from "../../models";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  child: {
    flexBasis: "50%",
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
});

type ListStateProps = {
  recipes: Recipe[];
};

export const ListRecipePreview: FC = () => {
  const bloc = new RecipeBloc(new RecipeRepository());

  bloc.add(new RecipeListEvent());

  return (
    <BlocBuilder
      bloc={bloc}
      builder={(state: RecipeState) => {
        if (state instanceof RecipeListState) {
          return <ListRecipePreviewListState recipes={state.recipes} />;
        }

        return <Text>Loading</Text>;
      }}
    />
  );
};

const ListRecipePreviewListState: FC<ListStateProps> = (props) => {
  const [text, setText] = useState("");
  const filtered = props.recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <View>
      <RecipeSearch text={text} setText={setText} />
      <View style={styles.container}>
        {filtered.map((recipe) => {
          return (
            <View key={recipe.id} style={styles.child}>
              <RecipePreview recipe={recipe} />
            </View>
          );
        })}
      </View>
    </View>
  );
};
