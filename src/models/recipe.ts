import { RecipeIngredient } from "./recipe-ingredient";
import { RecipeStep } from "./recipe-step";
import { Image } from "./image";
import { Profile } from "./profile";

export type Recipe = {
  id: string;
  name: string;
  description: string;
  author: Profile;
  image: Image;
  averageTime: {
    preparation: number;
    cooking: number;
  };
  averageRate: number;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
};
