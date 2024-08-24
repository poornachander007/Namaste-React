import { useState, useEffect } from "react";
import RestaurantCard from "./Card";
// import AllRestaurants from "../utils/mockData";
import { FETCH_DATA_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // const [listOfRestaurants, setAllRestaurants] = useState(AllRestaurants);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // console.log("https://corsproxy.io/?" + FETCH_DATA_URL);
    // const response = await fetch(`https://proxy.cors.sh/${FETCH_DATA_URL}`);
    const response = await fetch(FETCH_DATA_URL);
    const json = await response.json();
    // const arrayOfObjects = json?.data?.cards?.splice(3);
    const arrayOfObjects =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // const newArrayOfObjects = data?.data?.cards;
    //------------------------------------
    setListOfRestaurants(arrayOfObjects);
    setFilteredRestaurants(arrayOfObjects);
    // console.log(arrayOfObjects);
  };

  const onlineSatus = useOnlineStatus();

  if (onlineSatus === false)
    return (
      <h1>Oops!!! Seems You are On Offline, Please Check your Internet...</h1>
    );

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              // (restaurant) => restaurant.card.card.info.avgRating > 4.3
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
          className="filters-btn"
          type="button"
        >
          Top Rated Restaurants
        </button>
        <div>
          <input
            value={searchInput}
            className="searchInput"
            type="text"
            placeholder="Type here..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            type="button"
            onClick={(e) => {
              const filteredList = listOfRestaurants.filter((restaurant) =>
                // restaurant.card.card.info.name
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="cards-container">
        {filteredRestaurants.map((obj) => {
          // <Card key={obj.data.id} resData={obj} />
          return (
            <Link
              className="link-of-restaurant-card"
              to={"restaurant/" + obj.info.id}
              key={obj.info.id}
            >
              <RestaurantCard resData={obj} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
