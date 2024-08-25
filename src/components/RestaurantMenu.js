import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="p-6 text-center w-7/12 m-auto">
      <div className="main_heading">
        <h1 className="text-2xl font-bold font-serif text-fuchsia-900">
          {name}
        </h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      <div className="accordions">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            showBody={index === showIndex ? true : false}
            category={category}
            index={index}
            setShowIndex={setShowIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
