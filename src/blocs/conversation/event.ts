export abstract class ConversationEvent {}

export class ConversationGetEvent extends ConversationEvent {
  id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }
}

export class ConversationListEvent extends ConversationEvent {}
