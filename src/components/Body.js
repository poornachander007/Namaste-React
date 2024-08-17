import { useState } from "react";
import Card from "./Card";
import AllRestaurants from "../utils/mockData";

const Body = () => {
  const [ListOfRestaurants, setAllRestaurants] = useState(AllRestaurants);
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="body">
      <div className="filters">
        <button
          onClick={() => {
            const filteredList = AllRestaurants.filter(
              (restaurant) => restaurant.data.avgRating > 4.2
            );
            setAllRestaurants(filteredList);
          }}
          className="filters-btn"
          type="button"
        >
          Top Rated Restaurants
        </button>
        <input
          value={searchInput}
          className="searchInput"
          type="search"
          placeholder="Search"
          onChange={(e) => {
            setSearchInput(e.target.value);
            const filteredList = AllRestaurants.filter((restaurant) =>
              restaurant.data.name
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            );
            setAllRestaurants(filteredList);
          }}
        />
      </div>
      <div className="cards-container">
        {ListOfRestaurants.map((obj) => (
          <Card key={obj.data.id} resData={obj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
