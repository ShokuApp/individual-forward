import { Pictogram } from "./pictogram";

export type Profile = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  allergens: Pictogram[];
  diets: Pictogram[];
  favoriteRecipes: string[];
  favoriteRestaurants: string[];
  conversations: string[];
};
