import { Bloc } from "@felangel/bloc";
import {
  RecipeIngredientCreateEvent,
  RecipeIngredientEvent,
  RecipeIngredientGetEvent,
  RecipeIngredientListEvent,
  RecipeIngredientSetEvent,
} from "./event";
import {
  RecipeIngredientCreateState,
  RecipeIngredientErrorState,
  RecipeIngredientGetState,
  RecipeIngredientInitialState,
  RecipeIngredientListState,
  RecipeIngredientLoadingState,
  RecipeIngredientSetState,
  RecipeIngredientState,
} from "./state";
import { RecipeIngredientRepository } from "../../repositories";
import { RecipeIngredient } from "../../models";

export class RecipeIngredientBloc extends Bloc<
  RecipeIngredientEvent,
  RecipeIngredientState
> {
  private repository: RecipeIngredientRepository;

  constructor(repository: RecipeIngredientRepository) {
    super(new RecipeIngredientInitialState());

    this.repository = repository;
  }

  async *mapEventToState(
    event: RecipeIngredientEvent
  ): AsyncIterableIterator<RecipeIngredientState> {
    yield new RecipeIngredientLoadingState();

    if (event instanceof RecipeIngredientCreateEvent) {
      yield* this.create(event);
    } else if (event instanceof RecipeIngredientGetEvent) {
      yield* this.get(event);
    } else if (event instanceof RecipeIngredientSetEvent) {
      yield* this.set(event);
    } else if (event instanceof RecipeIngredientListEvent) {
      yield* this.list(event);
    }
  }

  async *create(event: RecipeIngredientCreateEvent) {
    try {
      await this.repository.set(event.recipeIngredient);

      yield new RecipeIngredientCreateState();
    } catch (e) {
      yield new RecipeIngredientErrorState();
    }
  }

  async *get(event: RecipeIngredientGetEvent) {
    try {
      const recipeIngredient = await this.repository.get(event.id);

      yield new RecipeIngredientGetState(recipeIngredient);
    } catch (e) {
      yield new RecipeIngredientErrorState();
    }
  }

  async *set(event: RecipeIngredientSetEvent) {
    try {
      const originalRecipeIngredient = await this.repository.get(event.id);
      const recipeIngredient: RecipeIngredient = {
        ...originalRecipeIngredient,
        ...event.recipeIngredient,
      };

      await this.repository.set(recipeIngredient);

      yield new RecipeIngredientSetState(recipeIngredient);
    } catch (e) {
      yield new RecipeIngredientErrorState();
    }
  }

  async *list(event: RecipeIngredientListEvent) {
    try {
      const recipeIngredients = await this.repository.list();

      yield new RecipeIngredientListState(recipeIngredients);
    } catch (e) {
      yield new RecipeIngredientErrorState();
    }
  }
}
