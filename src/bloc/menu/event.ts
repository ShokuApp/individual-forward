export abstract class MenuEvent {}

export class MenuGetEvent extends MenuEvent {
  id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }
}
