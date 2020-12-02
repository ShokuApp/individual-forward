import { Repository } from "./repository";
import { Recipe } from "../models";

import recipes from "../../data/recipes/data.json";
import { RecipeIngredientRepository } from "./recipe-ingredient";

const recipeIngredientRepository = new RecipeIngredientRepository();

export class RecipeRepository implements Repository<Recipe> {
  async get(id: string): Promise<Recipe> {
    const recipeJson = recipes.find((item) => item.id === id);

    if (recipeJson === undefined) {
      throw Error("Recipe not found");
    }

    const ingredients = await Promise.all(
      recipeJson.ingredients.map(async (id) => {
        return recipeIngredientRepository.get(id);
      })
    );

    return {
      id: recipeJson.id,
      name: recipeJson.name,
      description: recipeJson.description,
      image: recipeJson.image,
      average_time: Number(recipeJson.average_time),
      average_rate: Number(recipeJson.average_rate),
      steps: recipeJson.steps,
      ingredients,
    };
  }

  async set(recipe: Recipe): Promise<void> {
    const recipeJson = {
      id: recipe.id,
      name: recipe.name,
      description: recipe.description,
      image: recipe.image,
      average_time: recipe.average_time.toString(),
      average_rate: recipe.average_rate.toString(),
      steps: recipe.steps,
      ingredients: recipe.ingredients.map((ingredient) => ingredient.id),
    };
    const index = recipes.findIndex((item) => item.id === recipe.id);

    if (index !== -1) {
      recipes[index] = recipeJson;
    } else {
      recipes.push(recipeJson);
    }
  }
}
