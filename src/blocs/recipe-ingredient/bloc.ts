import { Bloc } from "@felangel/bloc";
import { RecipeIngredientEvent, RecipeIngredientGetEvent } from "./event";
import {
  RecipeIngredientErrorState,
  RecipeIngredientGetState,
  RecipeIngredientInitialState,
  RecipeIngredientLoadingState,
  RecipeIngredientState,
} from "./state";
import { RecipeIngredientRepository } from "../../repositories";

class RecipeIngredientBloc extends Bloc<
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
}
