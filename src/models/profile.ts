import { Restaurant } from "./restaurant";
import { Pictogram } from "./pictogram";
import { Recipe } from "./recipe";

export type Profile = {
  id: string
  email: string
  firstName: string
  lastName: string
  allergens: Pictogram[]
  diets: Pictogram[]
  favorite_recipes: Recipe[]
  favorite_restaurants: Restaurant[]
}