import { useState } from "react";

import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = ({ category, setShowIndex, index, showBody }) => {
  // const [showBody, setShowBody] = useState(showBody);
  const handleAccordion = () => {
    // setShowBody(!showBody);
    setShowIndex(index);
  };

  return (
    <div
      className="accordion p-2 m-2 border rounded-md shadow-md border-stone-500 shadow-black text-start"
      key={category?.card?.card.title}
    >
      <div
        className="accordion_header cursor-pointer flex justify-between items-center"
        onClick={handleAccordion}
      >
        <span className="text-xl">
          {category?.card?.card.title} ({category?.card?.card.itemCards.length})
        </span>
        <span>⬇↕➕</span>
      </div>
      {showBody && (
        <CategoryItemList itemCards={category?.card?.card?.itemCards} />
      )}
    </div>
  );
};

export default RestaurantCategory;
