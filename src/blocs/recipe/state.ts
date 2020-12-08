import { Recipe } from "../../models";

export abstract class RecipeState {}

export class RecipeInitialState extends RecipeState {}

export class RecipeLoadingState extends RecipeState {}

export class RecipeErrorState extends RecipeState {}

export class RecipeCreateState extends RecipeState {}

export class RecipeGetState extends RecipeState {
  recipe: Recipe;

  constructor(recipe: Recipe) {
    super();
    this.recipe = recipe;
  }
}

export class RecipeSetState extends RecipeState {
  recipe: Recipe;

  constructor(recipe: Recipe) {
    super();

    this.recipe = recipe;
  }
}

export class RecipeListState extends RecipeState {
  recipes: Recipe[];

  constructor(recipes: Recipe[]) {
    super();
    this.recipes = recipes;
  }
}
