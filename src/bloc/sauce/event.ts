export abstract class SauceEvent {}

export class SauceGetEvent extends SauceEvent {
  id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }
}
