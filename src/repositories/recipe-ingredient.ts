import { Repository } from "./repository";
import { RecipeIngredient } from "../models";

import recipeIngredients from "../../data/recipe-ingredients/data.json";
import { IngredientRepository } from "./ingredient";

const ingredientRepository = new IngredientRepository();

async function fromJSON(recipeIngredientJson: any): Promise<RecipeIngredient> {
  const ingredient = await ingredientRepository.get(
    recipeIngredientJson.ingredient
  );

  return {
    id: recipeIngredientJson.id,
    quantity: Number(recipeIngredientJson.quantity),
    unity: recipeIngredientJson.unity,
    ingredient,
  };
}

function toJSON(recipeIngredient: RecipeIngredient) {
  return {
    id: recipeIngredient.id,
    quantity: recipeIngredient.quantity.toString(),
    unity: recipeIngredient.unity,
    ingredient: recipeIngredient.ingredient.id,
  };
}

export class RecipeIngredientRepository
  implements Repository<RecipeIngredient> {
  async get(id: string): Promise<RecipeIngredient> {
    const recipeIngredientJson = recipeIngredients.find(
      (item) => item.id === id
    );

    if (recipeIngredientJson === undefined) {
      throw Error("RecipeIngredient not found");
    }

    return fromJSON(recipeIngredientJson);
  }

  async set(recipeIngredient: RecipeIngredient): Promise<void> {
    const index = recipeIngredients.findIndex(
      (item) => item.id === recipeIngredient.id
    );
    const recipeIngredientJson = toJSON(recipeIngredient);

    if (index !== -1) {
      recipeIngredients[index] = recipeIngredientJson;
    } else {
      recipeIngredients.push(recipeIngredientJson);
    }
  }

  async list(): Promise<RecipeIngredient[]> {
    return Promise.all(
      recipeIngredients.map((recipeIngredientJson) => {
        return fromJSON(recipeIngredientJson);
      })
    );
  }
}
