import { TimeRange } from "./time-range";
import { Image } from "./image";
import { Card } from "./card";

export type Restaurant = {
  id: string;
  name: string;
  description: string;
  image: Image;
  averageRate: number;
  averagePrice: number;
  address: {
    streetNumber: number;
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  phone: string;
  url: string;
  openingTime: TimeRange[][];
  card: Card;
};
