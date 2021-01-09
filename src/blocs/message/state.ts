import { Message } from "../../models";

export abstract class MessageState {}

export class MessageInitialState extends MessageState {}

export class MessageLoadingState extends MessageState {}

export class MessageErrorState extends MessageState {}

export class MessageGetState extends MessageState {
  message: Message;

  constructor(Message: Message) {
    super();
    this.message = Message;
  }
}

export class MessageListState extends MessageState {
  messages: Message[];

  constructor(messages: Message[]) {
    super();
    this.messages = messages;
  }
}
