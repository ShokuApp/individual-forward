import { Repository } from "./repository";
import { Restaurant } from "../models";

import restaurants from "../../data/restaurants/data.json";
import { CardRepository } from "./card";

const cardRepository = new CardRepository();

// deepcode ignore no-any: JSON
async function fromJSON(restaurantJson: any): Promise<Restaurant> {
  const card = await cardRepository.get(restaurantJson.card);

  return {
    id: restaurantJson.id,
    name: restaurantJson.name,
    description: restaurantJson.description,
    image: restaurantJson.image,
    averageRate: Number(restaurantJson.average_rate),
    averagePrice: Number(restaurantJson.average_price),
    address: {
      streetNumber: Number(restaurantJson.address.street_number),
      street: restaurantJson.address.street,
      postalCode: restaurantJson.address.postal_code,
      city: restaurantJson.address.city,
      country: restaurantJson.address.country,
    },
    location: {
      latitude: Number(restaurantJson.location.latitude),
      longitude: Number(restaurantJson.location.longitude),
    },
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
    address: {
      street_number: restaurant.address.streetNumber.toString(),
      street: restaurant.address.street,
      postal_code: restaurant.address.postalCode,
      city: restaurant.address.city,
      country: restaurant.address.country,
    },
    location: {
      latitude: restaurant.location.latitude.toString(),
      longitude: restaurant.location.longitude.toString(),
    },
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
