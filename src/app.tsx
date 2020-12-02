import React from "react";
import { registerRootComponent } from "expo";
import { ListRestaurantPreview } from "./components/restaurants/list-restaurant-preview";
import Data from "../data/restaurants/data.json";

const getRestaurantIds: () => string[] = () => {
  const ids: string[] = [];
  Data.map((restaurant) => {
    ids.push(restaurant.id);
  });
  return ids;
};

function App() {
  return <ListRestaurantPreview restaurants={getRestaurantIds()} />;
}
export default registerRootComponent(App);
