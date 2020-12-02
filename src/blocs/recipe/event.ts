export abstract class RecipeEvent {}

export class RecipeGetEvent extends RecipeEvent {
  id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }
}
