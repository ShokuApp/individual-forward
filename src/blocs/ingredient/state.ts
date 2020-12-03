import { Ingredient } from "../../models";

export abstract class IngredientState {}

export class IngredientInitialState extends IngredientState {}

export class IngredientLoadingState extends IngredientState {}

export class IngredientErrorState extends IngredientState {}

export class IngredientGetState extends IngredientState {
  ingredient: Ingredient;

  constructor(ingredient: Ingredient) {
    super();
    this.ingredient = ingredient;
  }
}

export class IngredientListState extends IngredientState {
  ingredientes: Ingredient[];

  constructor(ingredientes: Ingredient[]) {
    super();
    this.ingredientes = ingredientes;
  }
}
