import { useState, useEffect, useContext } from "react";
import RestaurantCard, { TopRestaurantCard } from "./RestaurantCard";
// import AllRestaurants from "../utils/mockData";
import { FETCH_DATA_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const TopRatedRestaurantCard = TopRestaurantCard(RestaurantCard);

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

  const { loggedInUser, setUserName, userName } = useContext(UserContext);
  // console.log(UserContext);

  // return listOfRestaurants.length === 0 ? (
  return listOfRestaurants == [] ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters flex mx-[30px]">
        <button
          className="my-3 px-3 rounded-lg border border-solid border-black"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              // (restaurant) => restaurant.card.card.info.avgRating > 4.3
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
          type="button"
        >
          Top Rated Restaurants
        </button>
        <div>
          <input
            value={searchInput}
            className="searchInput m-3 px-3 rounded-lg border border-solid border-black"
            type="text"
            placeholder="Type here..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="my-3 px-3 rounded-lg border border-solid border-black"
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
            🏹Search
          </button>
          <div className="inline m-4">
            <label>UserName : </label>
            <input
              className="userName px-3 rounded-lg border border-solid border-black"
              type="text"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="cards-container m-4 flex flex-wrap">
        {filteredRestaurants.map((obj) => {
          // <Card key={obj.data.id} resData={obj} />
          return (
            <Link
              className="link-of-restaurant-card"
              to={"restaurant/" + obj.info.id}
              key={obj.info.id}
            >
              {obj.info.avgRating >= 4.4 ? (
                <TopRatedRestaurantCard resData={obj} />
              ) : (
                <RestaurantCard resData={obj} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
