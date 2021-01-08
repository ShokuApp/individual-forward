import { Conversation } from "../../models";

export abstract class ConversationState {}

export class ConversationInitialState extends ConversationState {}

export class ConversationLoadingState extends ConversationState {}

export class ConversationErrorState extends ConversationState {}

export class ConversationGetState extends ConversationState {
  conversation: Conversation;

  constructor(conversation: Conversation) {
    super();
    this.conversation = conversation;
  }
}

export class ConversationListState extends ConversationState {
  conversations: Conversation[];

  constructor(conversation: Conversation[]) {
    super();
    this.conversations = conversation;
  }
}
