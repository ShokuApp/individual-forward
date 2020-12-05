export abstract class RecipeIngredientEvent {}

export class RecipeIngredientGetEvent extends RecipeIngredientEvent {
  id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }
}

export class RecipeIngredientListEvent extends RecipeIngredientEvent {}
