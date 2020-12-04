import { Repository } from "./repository";
import { Pictogram, Profile } from "../models";

import profiles from "../../data/profiles/data.json";
import { PictogramRepository } from "./pictogram";

const pictogramRepository = new PictogramRepository();

// deepcode ignore no-any: JSON
async function fromJSON(profileJson: any): Promise<Profile> {
  const allergens: Pictogram[] = await Promise.all(
    profileJson.allergens.map(async (id: string) => {
      return pictogramRepository.get(id);
    })
  );

  const diets: Pictogram[] = await Promise.all(
    profileJson.allergens.map(async (id: string) => {
      return pictogramRepository.get(id);
    })
  );

  return {
    id: profileJson.id,
    email: profileJson.email,
    firstName: profileJson.firstName,
    lastName: profileJson.lastName,
    favoriteRecipes: profileJson.favorite_recipes,
    favoriteRestaurants: profileJson.favorite_restaurants,
    allergens,
    diets,
  };
}

function toJSON(profile: Profile) {
  return {
    id: profile.id,
    email: profile.email,
    firstName: profile.firstName,
    lastName: profile.lastName,
    allergens: profile.allergens.map((allergen) => allergen.id),
    diets: profile.diets.map((diet) => diet.id),
    favorite_recipes: profile.favoriteRecipes,
    favorite_restaurants: profile.favoriteRestaurants,
  };
}

export class ProfileRepository implements Repository<Profile> {
  async get(id: string): Promise<Profile> {
    const profileJson = profiles.find((item) => item.id === id);

    if (profileJson === undefined) {
      throw Error("Profile not found");
    }

    return fromJSON(profileJson);
  }

  async set(profile: Profile): Promise<void> {
    const index = profiles.findIndex((item) => item.id === profile.id);
    const profileJson = toJSON(profile);

    if (index !== -1) {
      profiles[index] = profileJson;
    } else {
      profiles.push(profileJson);
    }
  }

  async list(): Promise<Profile[]> {
    return Promise.all(
      profiles.map((profileJson) => {
        return fromJSON(profileJson);
      })
    );
  }
}
