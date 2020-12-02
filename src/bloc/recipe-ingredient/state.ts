import { RecipeIngredient } from "../../models";

export abstract class RecipeIngredientState {}

export class RecipeIngredientInitialState extends RecipeIngredientState {}

export class RecipeIngredientLoadingState extends RecipeIngredientState {}

export class RecipeIngredientErrorState extends RecipeIngredientState {}

export class RecipeIngredientGetState extends RecipeIngredientState {
  recipeIngredient: RecipeIngredient;

  constructor(recipeIngredient: RecipeIngredient) {
    super();
    this.recipeIngredient = recipeIngredient;
  }
}
