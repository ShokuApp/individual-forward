import { Repository } from "./repository";
import { Restaurant } from "../models";

import restaurants from "../../data/restaurants/data.json";
import { CardRepository } from "./card";

const cardRepository = new CardRepository();

async function fromJSON(restaurantJson: any): Promise<Restaurant> {
  const card = await cardRepository.get(restaurantJson.card);

  return {
    id: restaurantJson.id,
    name: restaurantJson.name,
    description: restaurantJson.description,
    image: restaurantJson.image,
    averageRate: Number(restaurantJson.average_rate),
    averagePrice: Number(restaurantJson.average_price),
    address: restaurantJson.address,
    location: restaurantJson.location,
    phone: restaurantJson.phone,
    url: restaurantJson.url,
    openingTime: restaurantJson.opening_time,
    card,
  };
}

function toJSON(restaurant: Restaurant) {
  return {
    id: restaurant.id,
    name: restaurant.name,
    description: restaurant.description,
    image: restaurant.image,
    average_rate: restaurant.averageRate.toString(),
    average_price: restaurant.averagePrice.toString(),
    location: restaurant.location,
    phone: restaurant.phone,
    url: restaurant.url,
    opening_time: restaurant.openingTime,
    card: restaurant.card.id,
  };
}

export class RestaurantRepository implements Repository<Restaurant> {
  async get(id: string): Promise<Restaurant> {
    const restaurantJson = restaurants.find((item) => item.id === id);

    if (restaurantJson === undefined) {
      throw Error("Restaurant not found");
    }

    return fromJSON(restaurantJson);
  }

  async set(restaurant: Restaurant): Promise<void> {
    const index = restaurants.findIndex((item) => item.id === restaurant.id);
    const restaurantJson = toJSON(restaurant);

    if (index !== -1) {
      restaurants[index] = restaurantJson;
    } else {
      restaurants.push(restaurantJson);
    }
  }

  async list(): Promise<Restaurant[]> {
    return Promise.all(
      restaurants.map((restaurantJson) => {
        return fromJSON(restaurantJson);
      })
    );
  }
}
