import { Bloc } from "@felangel/bloc";
import { SauceEvent, SauceGetEvent, SauceListEvent } from "./event";
import {
  SauceErrorState,
  SauceGetState,
  SauceInitialState,
  SauceListState,
  SauceLoadingState,
  SauceState,
} from "./state";
import { SauceRepository } from "../../repositories";

export class SauceBloc extends Bloc<SauceEvent, SauceState> {
  private repository: SauceRepository;

  constructor(repository: SauceRepository) {
    super(new SauceInitialState());

    this.repository = repository;
  }

  async *mapEventToState(event: SauceEvent): AsyncIterableIterator<SauceState> {
    yield new SauceLoadingState();

    if (event instanceof SauceGetEvent) {
      yield* this.get(event);
    } else if (event instanceof SauceListEvent) {
      yield* this.list(event);
    }
  }

  async *get(event: SauceGetEvent) {
    try {
      const sauce = await this.repository.get(event.id);

      yield new SauceGetState(sauce);
    } catch (e) {
      yield new SauceErrorState();
    }
  }

  async *list(event: SauceListEvent) {
    try {
      const sauces = await this.repository.list();

      yield new SauceListState(sauces);
    } catch (e) {
      yield new SauceErrorState();
    }
  }
}
