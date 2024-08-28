import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { act } from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(async () =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

it("should be renderd RestaurantMenu Componant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const resCategories = screen.getAllByTestId("resCategory");
  expect(resCategories[0]).toBeInTheDocument();
  const accordionHeader = screen.getByText("Recommended (20)");
  const itemName = screen.getByText("Corn Exotica Pizza");
  expect(accordionHeader).toBeInTheDocument();
  expect(itemName).toBeInTheDocument();
  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems[0]).toBeInTheDocument();
  expect(screen.getByText("(0)")).toBeInTheDocument();
  const addButtons = screen.getAllByTestId("addButton");
  expect(foodItems.length).toBe(20);
  fireEvent.click(addButtons[0]);
  expect(screen.getByText("(1)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItem").length).toBe(21);
});
