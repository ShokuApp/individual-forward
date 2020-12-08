import { Card, Dish, Menu } from "../../models";

export const cardAllDishes: (card: Card) => Dish[] = (card) => {
  return [
    ...card.dishes,
    ...card.menus.reduce((previous: Dish[], current: Menu) => {
      previous.push(...current.dishes);
      return previous;
    }, []),
  ];
};
