import { Repository } from "./repository";
import { RecipeIngredient } from "../models";

import recipeIngredients from "../../data/recipe-ingredients/data.json";
import { IngredientRepository } from "./ingredient";

const ingredientRepository = new IngredientRepository();

export class RecipeIngredientRepository
  implements Repository<RecipeIngredient> {
  async get(id: string): Promise<RecipeIngredient> {
    const recipeIngredientJson = recipeIngredients.find(
      (item) => item.id === id
    );

    if (recipeIngredientJson === undefined) {
      throw Error("RecipeIngredient not found");
    }

    const ingredient = await ingredientRepository.get(
      recipeIngredientJson.ingredient_id
    );

    return {
      id: recipeIngredientJson.id,
      quantity: Number(recipeIngredientJson.quantity),
      unity: recipeIngredientJson.unity,
      ingredient,
    };
  }

  async set(recipeIngredient: RecipeIngredient): Promise<void> {
    const recipeIngredientJson = {
      id: recipeIngredient.id,
      quantity: recipeIngredient.quantity.toString(),
      unity: recipeIngredient.unity,
      ingredient_id: recipeIngredient.ingredient.id,
    };
    const index = recipeIngredients.findIndex(
      (item) => item.id === recipeIngredient.id
    );

    if (index !== -1) {
      recipeIngredients[index] = recipeIngredientJson;
    } else {
      recipeIngredients.push(recipeIngredientJson);
    }
  }
}
