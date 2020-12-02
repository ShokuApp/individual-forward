import { Bloc } from "@felangel/bloc";
import { SauceEvent, SauceGetEvent } from "./event";
import {
  SauceErrorState,
  SauceGetState,
  SauceInitialState,
  SauceLoadingState,
  SauceState,
} from "./state";
import { SauceRepository } from "../../repositories";

class SauceBloc extends Bloc<SauceEvent, SauceState> {
  private repository: SauceRepository;

  constructor(repository: SauceRepository) {
    super(new SauceInitialState());

    this.repository = repository;
  }

  async *mapEventToState(event: SauceEvent): AsyncIterableIterator<SauceState> {
    yield new SauceLoadingState();

    if (event instanceof SauceGetEvent) {
      yield* this.get(event);
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
}
