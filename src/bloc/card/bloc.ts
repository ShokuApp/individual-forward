import { Bloc } from "@felangel/bloc";
import { CardEvent, CardGetEvent } from "./event";
import {
  CardErrorState,
  CardGetState,
  CardInitialState,
  CardLoadingState,
  CardState,
} from "./state";
import { CardRepository } from "../../repositories";

class CardBloc extends Bloc<CardEvent, CardState> {
  private repository: CardRepository;

  constructor(repository: CardRepository) {
    super(new CardInitialState());

    this.repository = repository;
  }

  async *mapEventToState(event: CardEvent): AsyncIterableIterator<CardState> {
    yield new CardLoadingState();

    if (event instanceof CardGetEvent) {
      yield* this.get(event);
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
}
