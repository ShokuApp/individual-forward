import { Bloc } from "@felangel/bloc";
import { RecipeEvent, RecipeGetEvent, RecipeListEvent } from "./event";
import {
  RecipeErrorState,
  RecipeGetState,
  RecipeInitialState,
  RecipeListState,
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
    } else if (event instanceof RecipeListEvent) {
      yield* this.list(event);
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

  async *list(event: RecipeListEvent) {
    try {
      const recipes = await this.repository.list();

      yield new RecipeListState(recipes);
    } catch (e) {
      yield new RecipeErrorState();
    }
  }
}
