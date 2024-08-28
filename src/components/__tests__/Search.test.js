import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListDataMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Restaurant List for 'wok' text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchButton = screen.getByTestId("searchButton");
  const searchInput = screen.getByTestId("searchInput");

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  // console.log(cardsBeforeSearch.length);

  fireEvent.change(searchInput, { target: { value: "wok" } });
  fireEvent.click(searchButton);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  // console.log(cardsAfterSearch.length);

  expect(searchButton).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
  //   expect(cardsBeforeSearch.length).not.toEqual(cardsAfterSearch.length);
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedRestaurantButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  const cardsBeforeClickedTopTated = screen.getAllByTestId("resCard");
  // console.log(cardsBeforeClickedTopTated.length);

  fireEvent.click(topRatedRestaurantButton);

  const cardsAfterClickedTopRated = screen.getAllByTestId("resCard");
  // console.log(cardsAfterClickedTopRated.length, "topRated");

  expect(topRatedRestaurantButton).toBeInTheDocument();
  //   expect(cardsBeforeClickedTopTated.length).not.toEqual(cardsAfterClickedTopRated.length);
  expect(cardsAfterClickedTopRated.length).toBe(1);
});
