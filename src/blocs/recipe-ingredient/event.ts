import { RecipeIngredient } from "../../models";

export abstract class RecipeIngredientEvent {}

export class RecipeIngredientCreateEvent extends RecipeIngredientEvent {
  recipeIngredient: RecipeIngredient;

  constructor(recipeIngredient: RecipeIngredient) {
    super();

    this.recipeIngredient = recipeIngredient;
  }
}

export class RecipeIngredientGetEvent extends RecipeIngredientEvent {
  id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }
}

export class RecipeIngredientSetEvent extends RecipeIngredientEvent {
  id: string;
  recipeIngredient: Partial<RecipeIngredient>;

  constructor(id: string, recipeIngredient: Partial<RecipeIngredient>) {
    super();

    this.id = id;
    this.recipeIngredient = recipeIngredient;
  }
}

export class RecipeIngredientListEvent extends RecipeIngredientEvent {}
