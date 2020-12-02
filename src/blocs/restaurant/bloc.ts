import { Bloc } from "@felangel/bloc";
import { RestaurantEvent, RestaurantGetEvent } from "./event";
import {
  RestaurantErrorState,
  RestaurantGetState,
  RestaurantInitialState,
  RestaurantLoadingState,
  RestaurantState,
} from "./state";
import { RestaurantRepository } from "../../repositories";

class RestaurantBloc extends Bloc<RestaurantEvent, RestaurantState> {
  private repository: RestaurantRepository;

  constructor(repository: RestaurantRepository) {
    super(new RestaurantInitialState());

    this.repository = repository;
  }

  async *mapEventToState(
    event: RestaurantEvent
  ): AsyncIterableIterator<RestaurantState> {
    yield new RestaurantLoadingState();

    if (event instanceof RestaurantGetEvent) {
      yield* this.get(event);
    }
  }

  async *get(event: RestaurantGetEvent) {
    try {
      const restaurant = await this.repository.get(event.id);

      yield new RestaurantGetState(restaurant);
    } catch (e) {
      yield new RestaurantErrorState();
    }
  }
}
