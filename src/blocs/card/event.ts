export abstract class CardEvent {}

export class CardGetEvent extends CardEvent {
  id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }
}

export class CardListEvent extends CardEvent {}
