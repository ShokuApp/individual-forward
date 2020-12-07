import { Bloc } from "@felangel/bloc";
import {
  RecipeCreateEvent,
  RecipeEvent,
  RecipeGetEvent,
  RecipeListEvent,
  RecipeSetEvent,
} from "./event";
import {
  RecipeCreateState,
  RecipeErrorState,
  RecipeGetState,
  RecipeInitialState,
  RecipeListState,
  RecipeLoadingState,
  RecipeSetState,
  RecipeState,
} from "./state";
import { RecipeRepository } from "../../repositories";
import { Recipe } from "../../models";

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

    if (event instanceof RecipeCreateEvent) {
      yield* this.create(event);
    } else if (event instanceof RecipeGetEvent) {
      yield* this.get(event);
    } else if (event instanceof RecipeSetEvent) {
      yield* this.set(event);
    } else if (event instanceof RecipeListEvent) {
      yield* this.list(event);
    }
  }

  async *create(event: RecipeCreateEvent) {
    try {
      await this.repository.set(event.recipe);

      yield new RecipeCreateState();
    } catch (e) {
      yield new RecipeErrorState();
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

  async *set(event: RecipeSetEvent) {
    try {
      const originalRecipe = await this.repository.get(event.id);
      const recipe: Recipe = {
        ...originalRecipe,
        ...event.recipe,
      };

      await this.repository.set(recipe);

      yield new RecipeSetState(recipe);
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
