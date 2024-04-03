import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "./App";

describe("App component", () => {
  test("renders correctly", () => {
    const { getByText } = render(<App />);
    const countText = getByText("Count: 0");
    expect(countText).toBeTruthy();
  });

  test("increments count when Increment button is pressed", () => {
    const { getByText } = render(<App />);
    const incrementButton = getByText("Increment");
    fireEvent.press(incrementButton);
    const countText = getByText("Count: 1");
    expect(countText).toBeTruthy();
  });

  test("decrements count when Decrement button is pressed", () => {
    const { getByText } = render(<App />);
    const decrementButton = getByText("Decrement");
    fireEvent.press(decrementButton);
    const countText = getByText("Count: -1");
    expect(countText).toBeTruthy();
  });
});
