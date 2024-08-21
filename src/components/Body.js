import { useState, useEffect } from "react";
import Card from "./Card";
// import AllRestaurants from "../utils/mockData";
import { FETCH_DATA_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  // const [listOfRestaurants, setAllRestaurants] = useState(AllRestaurants);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(FETCH_DATA_URL);
    const response = await fetch(FETCH_DATA_URL);
    const json = await response.json();
    const arrayOfObjects = json?.data?.cards?.splice(3);
    // const newArrayOfObjects = data?.data?.cards;
    setListOfRestaurants(arrayOfObjects);
    setFilteredRestaurants(arrayOfObjects);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.card.card.info.avgRating > 4.3
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
                restaurant.card.card.info.name
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
        {filteredRestaurants.map((obj, index) => (
          // <Card key={obj.data.id} resData={obj} />
          <Card key={index} resData={obj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
