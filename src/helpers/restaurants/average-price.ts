export enum AVERAGE_PRICE {
  LOW = 1,
  MIDDLE,
  HIGH,
}

export const averagePrice: (price: number) => AVERAGE_PRICE = (price) => {
  if (price < 15) return AVERAGE_PRICE.LOW;
  if (price < 30) return AVERAGE_PRICE.MIDDLE;
  return AVERAGE_PRICE.HIGH;
};
