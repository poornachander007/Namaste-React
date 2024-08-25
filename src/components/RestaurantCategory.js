import { useState } from "react";
import { CDN_URL } from "../utils/constants.js";
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
        <div className="accordion_body">
          {category?.card?.card.itemCards.map((item) => (
            <div
              className="card shadow-slate-600 shadow-md flex items-center m-2 p-2 rounded-md"
              key={item?.card?.info?.id}
            >
              <div className="text_section self-start p-4  w-9/12">
                <h1>
                  <span>{item?.card?.info?.name}</span>
                  <span>
                    - ₹
                    {item?.card?.info?.price
                      ? item?.card?.info?.price / 100
                      : item?.card?.info?.defaultPrice / 100}
                  </span>
                </h1>
                <p className="text-xs">{item?.card?.info?.description}</p>
              </div>
              <div className=" relative w-3/12 p-4">
                <button
                  className="px-4 absolute bottom-2 left-8 rounded-lg bg-white text-green-800 font-bold text-xl"
                  type="button"
                >
                  ADD
                </button>
                <img
                  className="rounded-md h-28 w-28"
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                />
                {/* <img src={CDN_URL + "z0c4xpovma1qtmu4tlls"} /> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
