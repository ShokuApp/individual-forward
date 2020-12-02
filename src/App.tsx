import React from "react";
import { registerRootComponent } from "expo";
import { RestaurantPreview } from "./components/restaurants/restaurant-preview";

function App() {
  return <RestaurantPreview />;
}

export default registerRootComponent(App);
