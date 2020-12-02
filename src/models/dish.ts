import { Sauce } from "./sauce";
import { Ingredient } from "./ingredient";

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: string;
  type: string;
  ingredients: Ingredient[];
  sauces: Sauce[];
};
