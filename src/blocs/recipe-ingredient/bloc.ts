import { Bloc } from "@felangel/bloc";
import {
  RecipeIngredientEvent,
  RecipeIngredientGetEvent,
  RecipeIngredientListEvent,
} from "./event";
import {
  RecipeIngredientErrorState,
  RecipeIngredientGetState,
  RecipeIngredientInitialState,
  RecipeIngredientListState,
  RecipeIngredientLoadingState,
  RecipeIngredientState,
} from "./state";
import { RecipeIngredientRepository } from "../../repositories";

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

    if (event instanceof RecipeIngredientGetEvent) {
      yield* this.get(event);
    } else if (event instanceof RecipeIngredientListEvent) {
      yield* this.list(event);
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

  async *list(event: RecipeIngredientListEvent) {
    try {
      const recipeIngredients = await this.repository.list();

      yield new RecipeIngredientListState(recipeIngredients);
    } catch (e) {
      yield new RecipeIngredientErrorState();
    }
  }
}
