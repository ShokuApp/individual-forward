import { Sauce } from "./sauce";
import { Ingredient } from "./ingredient";

export type Dish = {
  id: string;
  name: string;
  type: "starter" | "plate" | "dessert";
  description: string;
  price: string;
  ingredients: Ingredient[];
  sauces: Sauce[];
};
