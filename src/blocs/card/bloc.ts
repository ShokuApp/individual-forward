import { Bloc } from "@felangel/bloc";
import { CardEvent, CardGetEvent, CardListEvent } from "./event";
import {
  CardErrorState,
  CardGetState,
  CardInitialState,
  CardListState,
  CardLoadingState,
  CardState,
} from "./state";
import { CardRepository } from "../../repositories";

export class CardBloc extends Bloc<CardEvent, CardState> {
  private repository: CardRepository;

  constructor(repository: CardRepository) {
    super(new CardInitialState());

    this.repository = repository;
  }

  async *mapEventToState(event: CardEvent): AsyncIterableIterator<CardState> {
    yield new CardLoadingState();

    if (event instanceof CardGetEvent) {
      yield* this.get(event);
    } else if (event instanceof CardListEvent) {
      yield* this.list(event);
    }
  }

  async *get(event: CardGetEvent) {
    try {
      const card = await this.repository.get(event.id);

      yield new CardGetState(card);
    } catch (e) {
      yield new CardErrorState();
    }
  }

  async *list(event: CardListEvent) {
    try {
      const cards = await this.repository.list();

      yield new CardListState(cards);
    } catch (e) {
      yield new CardErrorState();
    }
  }
}
