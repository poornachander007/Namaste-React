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
    <div className="card">
      <img
        className="card-image"
        alt="food-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h4>{avgRating} stars</h4>
      <p>{cuisines.join(", ")}</p>
      {/* <h4>$ {costForTwo / 100} for two</h4> */}
      <h4>{costForTwo}</h4>
      {/* <h4>{deliveryTime} minuts</h4> */}
      <h4>{sla.slaString}</h4>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestaurantCard;
