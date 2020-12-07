import { Recipe } from "../../models";

export abstract class RecipeEvent {}

export class RecipeCreateEvent extends RecipeEvent {
  recipe: Recipe;

  constructor(recipe: Recipe) {
    super();

    this.recipe = recipe;
  }
}

export class RecipeGetEvent extends RecipeEvent {
  id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }
}

export class RecipeSetEvent extends RecipeEvent {
  id: string;
  recipe: Partial<Recipe>;

  constructor(id: string, recipe: Partial<Recipe>) {
    super();

    this.id = id;
    this.recipe = recipe;
  }
}

export class RecipeListEvent extends RecipeEvent {}
