import { Bloc } from "@felangel/bloc";
import { DishEvent, DishGetEvent } from "./event";
import {
  DishErrorState,
  DishGetState,
  DishInitialState,
  DishLoadingState,
  DishState,
} from "./state";
import { DishRepository } from "../../repositories";

class DishBloc extends Bloc<DishEvent, DishState> {
  private repository: DishRepository;

  constructor(repository: DishRepository) {
    super(new DishInitialState());

    this.repository = repository;
  }

  async *mapEventToState(event: DishEvent): AsyncIterableIterator<DishState> {
    yield new DishLoadingState();

    if (event instanceof DishGetEvent) {
      yield* this.get(event);
    }
  }

  async *get(event: DishGetEvent) {
    try {
      const dish = await this.repository.get(event.id);

      yield new DishGetState(dish);
    } catch (e) {
      yield new DishErrorState();
    }
  }
}
