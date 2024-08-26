import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    // deliveryTime,
    locality,
    sla,
    // } = resData?.card?.card?.info;
  } = resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="pt-1">
      <div className="card m-2 p-1 w-[230px] h-[350px] mx-3 bg-gray-100 rounded-xl hover:bg-gray-200">
        <img
          className="card-image w-[100%] h-[150px] rounded-lg p-1 hover:p-0"
          alt="food-image"
          src={CDN_URL + cloudinaryImageId}
        />
        <h1 className="font-medium font-serif line-clamp-1">{name}</h1>
        <h4>{avgRating} stars</h4>
        <p className="text-balance line-clamp-2">{cuisines.join(", ")}</p>
        {/* <h4>$ {costForTwo / 100} for two</h4> */}
        <h4>{costForTwo}</h4>
        {/* <h4>{deliveryTime} minuts</h4> */}
        <h4>{sla.slaString}</h4>
        <h4>{locality}</h4>
        <h4>
          UserName :
          <span className="text-lg text-red-400 font-bold">{loggedInUser}</span>
        </h4>
      </div>
    </div>
  );
};

export const TopRestaurantCard = () => {
  return (props) => {
    return (
      <div className="">
        <label className="bg-gray-500 px-2 py-1 m-3 absolute rounded-xl text-white font-medium font-sans">
          Top Rated {`>= 4.4`}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
