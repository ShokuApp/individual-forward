export abstract class DishEvent {}

export class DishGetEvent extends DishEvent {
  id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }
}

export class DishListEvent extends DishEvent {}
