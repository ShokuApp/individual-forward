import { Bloc } from "@felangel/bloc";
import {
  ConversationEvent,
  ConversationGetEvent,
  ConversationListEvent,
} from "./event";
import {
  ConversationErrorState,
  ConversationGetState,
  ConversationInitialState,
  ConversationListState,
  ConversationLoadingState,
  ConversationState,
} from "./state";
import { ConversationRepository } from "../../repositories";

export class ConversationBloc extends Bloc<
  ConversationEvent,
  ConversationState
> {
  private repository: ConversationRepository;

  constructor(repository: ConversationRepository) {
    super(new ConversationInitialState());

    this.repository = repository;
  }

  async *mapEventToState(
    event: ConversationEvent
  ): AsyncIterableIterator<ConversationState> {
    yield new ConversationLoadingState();

    if (event instanceof ConversationGetEvent) {
      yield* this.get(event);
    } else if (event instanceof ConversationListEvent) {
      yield* this.list(event);
    }
  }

  async *get(event: ConversationGetEvent) {
    try {
      const Conversation = await this.repository.get(event.id);

      yield new ConversationGetState(Conversation);
    } catch (e) {
      yield new ConversationErrorState();
    }
  }

  async *list(event: ConversationListEvent) {
    try {
      const conversations = await this.repository.list();

      yield new ConversationListState(conversations);
    } catch (e) {
      yield new ConversationErrorState();
    }
  }
}
