export enum PRICE_PRICE {
  LOW = 1,
  MIDDLE,
  HIGH,
}

export const restaurantPriceRange: (price: number) => PRICE_PRICE = (price) => {
  if (price < 15) return PRICE_PRICE.LOW;
  if (price < 30) return PRICE_PRICE.MIDDLE;
  return PRICE_PRICE.HIGH;
};
