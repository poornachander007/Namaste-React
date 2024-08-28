import { render, screen } from "@testing-library/react";
import RestaurantCard, { TopRestaurantCard } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard Component with Props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  //   console.log(MOCK_DATA);
  // Query
  const name = screen.getByText("Chinese Wok");

  //Assertion
  expect(name).toBeInTheDocument();
});

// it("should render RestaurantCard Component with Top Rated Label ", () => {
//   render(<TopRestaurantCard resData={MOCK_DATA} />);
//   //   console.log(MOCK_DATA);
//   // Query
//   //   const TopRatedLabelText = screen.getByText("Top Rated");
//   //   const TopRatedLabelText = screen.getByLabelText("Top Rated (abow 4.4)");
//   const name = screen.getByText("Gachibowli");

//   //Assertion
//   expect(name).toBeInTheDocument();
// });
