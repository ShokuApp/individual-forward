import { Repository } from "./repository";
import { Restaurant } from "../models";

import restaurants from "../../data/restaurants/data.json";
import { CardRepository } from "./card";

const cardRepository = new CardRepository();

export class RestaurantRepository implements Repository<Restaurant> {
  async get(id: string): Promise<Restaurant> {
    const restaurantJson = restaurants.find((item) => item.id === id);

    if (restaurantJson === undefined) {
      throw Error("Restaurant not found");
    }

    const card = await cardRepository.get(restaurantJson.card_id);

    return {
      id: restaurantJson.id,
      name: restaurantJson.name,
      description: restaurantJson.description,
      image: restaurantJson.image,
      average_rate: Number(restaurantJson.average_rate),
      average_price: restaurantJson.average_price,
      location: restaurantJson.location,
      phone: restaurantJson.phone,
      url: restaurantJson.url,
      opening_time: restaurantJson.opening_time,
      card,
    };
  }

  async set(restaurant: Restaurant): Promise<void> {
    const restaurantJson = {
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description,
      image: restaurant.image,
      average_rate: restaurant.average_rate.toString(),
      average_price: restaurant.average_price,
      location: restaurant.location,
      phone: restaurant.phone,
      url: restaurant.url,
      opening_time: restaurant.opening_time,
      card_id: restaurant.card.id,
    };
    const index = restaurants.findIndex((item) => item.id === restaurant.id);

    if (index !== -1) {
      restaurants[index] = restaurantJson;
    } else {
      restaurants.push(restaurantJson);
    }
  }
}
