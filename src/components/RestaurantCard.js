import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData, "......from Card");
  // const {
  //   cloudinaryImageId,
  //   name,
  //   cuisines,
  //   avgRating,
  //   costForTwo,
  //   deliveryTime,
  // } = resData.data;

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

  return (
    <div className="card m-2 p-1 w-[230px] h-[350px] mx-3 bg-gray-100 rounded-xl hover:bg-gray-200">
      <img
        className="card-image w-[100%] h-[150px] rounded-lg p-1 hover:p-0"
        alt="food-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h1 className="font-medium font-serif">{name}</h1>
      <h4>{avgRating} stars</h4>
      <p className="text-balance line-clamp-3">{cuisines.join(", ")}</p>
      {/* <h4>$ {costForTwo / 100} for two</h4> */}
      <h4>{costForTwo}</h4>
      {/* <h4>{deliveryTime} minuts</h4> */}
      <h4>{sla.slaString}</h4>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestaurantCard;
