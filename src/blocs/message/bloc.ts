import { Bloc } from "@felangel/bloc";
import { MessageEvent, MessageGetEvent, MessageListEvent } from "./event";
import {
  MessageErrorState,
  MessageGetState,
  MessageInitialState,
  MessageListState,
  MessageLoadingState,
  MessageState,
} from "./state";
import { MessageRepository } from "../../repositories";

export class MessageBloc extends Bloc<MessageEvent, MessageState> {
  private repository: MessageRepository;

  constructor(repository: MessageRepository) {
    super(new MessageInitialState());

    this.repository = repository;
  }

  async *mapEventToState(
    event: MessageEvent
  ): AsyncIterableIterator<MessageState> {
    yield new MessageLoadingState();

    if (event instanceof MessageGetEvent) {
      yield* this.get(event);
    } else if (event instanceof MessageListEvent) {
      yield* this.list(event);
    }
  }

  async *get(event: MessageGetEvent) {
    try {
      const Message = await this.repository.get(event.id);

      yield new MessageGetState(Message);
    } catch (e) {
      yield new MessageErrorState();
    }
  }

  async *list(event: MessageListEvent) {
    try {
      const messages = await this.repository.list();

      yield new MessageListState(messages);
    } catch (e) {
      yield new MessageErrorState();
    }
  }
}
