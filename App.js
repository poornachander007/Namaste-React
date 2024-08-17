import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { AllRestaurants } from "./data";

// const resList = () => {
//   let resultList = [];
//   for (var i = 0; i < 12; i++) {
//     resultList.push(i);
//   }
//   return resultList;
// };

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src="https://clipground.com/images/food-company-logo.png"
        />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Search = () => {
  return <div className="search">Search</div>;
};

const Card = (props) => {
  const { resData } = props;
  console.log(resData.data);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData.data;

  return (
    <div className="card">
      <img
        className="card-image"
        alt="food-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h4>{name}</h4>
      <h4>{avgRating} stars</h4>
      <p>{cuisines.join(", ")}</p>
      <h4>$ {costForTwo / 100} for two</h4>
      <h4>{deliveryTime} minuts</h4>
    </div>
  );
};

const CardsList = () => {
  return (
    <div className="cards-container">
      {AllRestaurants.map((obj) => (
        <Card key={obj.data.id} resData={obj} />
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <Search />
      <CardsList />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<AppLayout />);
