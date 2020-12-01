import { RecipeIngredient } from "./recipe-ingredient";
import { RecipeStep } from "./recipe-step";
import { Image } from "./image";

export type Recipe = {
  id: string;
  name: string;
  description: string;
  image: Image;
  average_time: number;
  average_rate: number;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
};