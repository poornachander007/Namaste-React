import { CDN_URL } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CategoryItemList = ({ itemCards }) => {
  // console.log(itemCards);
  const dispatch = useDispatch();
  const handleAddOnclick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="accordion_body">
      {itemCards.map((item) => (
        <div
          data-testid="foodItem"
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
              data-testid="addButton"
              className="px-4 absolute bottom-2 left-8 rounded-lg bg-white text-green-800 font-bold text-xl"
              type="button"
              onClick={() => handleAddOnclick(item)}
            >
              ADD
            </button>
            <img
              className="rounded-md h-28 w-28"
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
            {/* <img src={CDN_URL + "z0c4xpovma1qtmu4tlls"} /> */}
            {/* {console.log(CDN_URL, item?.card?.info?.imageId)} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItemList;
