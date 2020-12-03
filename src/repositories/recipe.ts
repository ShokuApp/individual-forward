import { Repository } from "./repository";
import { Recipe, RecipeIngredient } from "../models";

import recipes from "../../data/recipes/data.json";
import { RecipeIngredientRepository } from "./recipe-ingredient";

const recipeIngredientRepository = new RecipeIngredientRepository();

async function fromJSON(recipeJson: any): Promise<Recipe> {
  const ingredients: RecipeIngredient[] = await Promise.all(
    recipeJson.ingredients.map(async (id: string) => {
      return recipeIngredientRepository.get(id);
    })
  );

  return {
    id: recipeJson.id,
    name: recipeJson.name,
    description: recipeJson.description,
    author: recipeJson.author,
    image: recipeJson.image,
    averageTime: recipeJson.average_time,
    averageRate: Number(recipeJson.average_rate),
    steps: recipeJson.steps,
    ingredients,
  };
}

function toJSON(recipe: Recipe) {
  return {
    id: recipe.id,
    name: recipe.name,
    description: recipe.description,
    image: recipe.image,
    average_time: recipe.averageTime.toString(),
    average_rate: recipe.averageRate.toString(),
    steps: recipe.steps,
    ingredients: recipe.ingredients.map((ingredient) => ingredient.id),
  };
}

export class RecipeRepository implements Repository<Recipe> {
  async get(id: string): Promise<Recipe> {
    const recipeJson = recipes.find((item) => item.id === id);

    if (recipeJson === undefined) {
      throw Error("Recipe not found");
    }

    return fromJSON(recipeJson);
  }

  async set(recipe: Recipe): Promise<void> {
    const index = recipes.findIndex((item) => item.id === recipe.id);
    const recipeJson = toJSON(recipe);

    if (index !== -1) {
      recipes[index] = recipeJson;
    } else {
      recipes.push(recipeJson);
    }
  }

  async list(): Promise<Recipe[]> {
    return Promise.all(
      recipes.map((recipeJson) => {
        return fromJSON(recipeJson);
      })
    );
  }
}
