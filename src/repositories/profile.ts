import { Repository } from "./repository";
import { Profile } from "../models";

import profiles from "../../data/profiles/data.json";
import { RestaurantRepository } from "./restaurant";
import { RecipeRepository } from "./recipe";
import { PictogramRepository } from "./pictogram";

const recipeRepository = new RecipeRepository();
const restaurantRepository = new RestaurantRepository();
const pictogramRepository = new PictogramRepository();

export class ProfileRepository implements Repository<Profile> {
  async get(id: string): Promise<Profile> {
    const profileJson = profiles.find((item) => item.id === id);

    if (profileJson === undefined) {
      throw Error("Profile not found");
    }

    const allergens = await Promise.all(
      profileJson.allergens.map(async (id) => {
        return pictogramRepository.get(id);
      })
    );

    const diets = await Promise.all(
      profileJson.allergens.map(async (id) => {
        return pictogramRepository.get(id);
      })
    );

    const favorite_recipes = await Promise.all(
      profileJson.favorite_recipes.map(async (id) => {
        return recipeRepository.get(id);
      })
    );

    const favorite_restaurants = await Promise.all(
      profileJson.favorite_restaurants.map(async (id) => {
        return restaurantRepository.get(id);
      })
    );

    return {
      id: profileJson.id,
      email: profileJson.email,
      firstName: profileJson.firstName,
      lastName: profileJson.lastName,
      allergens,
      diets,
      favorite_recipes,
      favorite_restaurants,
    };
  }

  async set(profile: Profile): Promise<void> {
    const profileJson = {
      id: profile.id,
      email: profile.email,
      firstName: profile.firstName,
      lastName: profile.lastName,
      allergens: profile.allergens.map((allergen) => allergen.id),
      diets: profile.diets.map((diet) => diet.id),
      favorite_recipes: profile.favorite_recipes.map((favorite) => favorite.id),
      favorite_restaurants: profile.favorite_restaurants.map(
        (favorite) => favorite.id
      ),
    };
    const index = profiles.findIndex((item) => item.id === profile.id);

    if (index !== -1) {
      profiles[index] = profileJson;
    } else {
      profiles.push(profileJson);
    }
  }
}
