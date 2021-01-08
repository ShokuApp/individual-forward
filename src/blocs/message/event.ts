export abstract class MessageEvent {}

export class MessageGetEvent extends MessageEvent {
  id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }
}

export class MessageListEvent extends MessageEvent {}
