import { Ingredient } from "./ingredient";

export type RecipeIngredient = {
  id: string;
  ingredient: Ingredient;
  quantity: number;
  unity: string;
};