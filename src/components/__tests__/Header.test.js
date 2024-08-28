import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login Button", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const loginButton = screen.getByRole("button", { text: "Login" });

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with Cart (0)", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const cartItems = screen.getByText("(0)");

  //Assertion
  expect(cartItems).toBeInTheDocument();
});
it("Should render Header Component with username default user as /defau/ regex", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const cartItems = screen.getByText(/defau/);

  //Assertion
  expect(cartItems).toBeInTheDocument();
});

it("Should change login Button to logout on click", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const loginButton = screen.getByRole("button", { text: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { text: "Logout" });

  //Assertion
  expect(logoutButton).toBeInTheDocument();
});
