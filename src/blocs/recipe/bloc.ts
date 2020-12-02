import { Bloc } from "@felangel/bloc";
import { RecipeEvent, RecipeGetEvent } from "./event";
import {
  RecipeErrorState,
  RecipeGetState,
  RecipeInitialState,
  RecipeLoadingState,
  RecipeState,
} from "./state";
import { RecipeRepository } from "../../repositories";

export class RecipeBloc extends Bloc<RecipeEvent, RecipeState> {
  private repository: RecipeRepository;

  constructor(repository: RecipeRepository) {
    super(new RecipeInitialState());

    this.repository = repository;
  }

  async *mapEventToState(
    event: RecipeEvent
  ): AsyncIterableIterator<RecipeState> {
    yield new RecipeLoadingState();

    if (event instanceof RecipeGetEvent) {
      yield* this.get(event);
    }
  }

  async *get(event: RecipeGetEvent) {
    try {
      const recipe = await this.repository.get(event.id);

      yield new RecipeGetState(recipe);
    } catch (e) {
      yield new RecipeErrorState();
    }
  }
}
