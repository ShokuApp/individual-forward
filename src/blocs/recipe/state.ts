import { Recipe } from "../../models";

export abstract class RecipeState {}

export class RecipeInitialState extends RecipeState {}

export class RecipeLoadingState extends RecipeState {}

export class RecipeErrorState extends RecipeState {}

export class RecipeGetState extends RecipeState {
  recipe: Recipe;

  constructor(recipe: Recipe) {
    super();
    this.recipe = recipe;
  }
}
