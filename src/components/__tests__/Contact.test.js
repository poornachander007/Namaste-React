import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All Tests");
  // });
  // afterAll(() => {
  //   console.log("After All Tests");
  // });
  // beforeEach(() => {
  //   console.log("Before Each Test");
  // });
  // afterEach(() => {
  //   console.log("After Each Test");
  // });

  it("Contact Us Component should be Loaded", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("2 Input elements should be Loaded", () => {
    render(<Contact />);

    const textboxs = screen.getAllByRole("textbox");
    // Assertion
    expect(textboxs.length).toBe(2);
  });

  it("Button element should be Loaded", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
  });
});
