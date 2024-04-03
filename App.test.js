import React from "react";
import { create } from "react-test-renderer";
import App from "./App";

describe("App component", () => {
  test("renders correctly", () => {
    const tree = create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("increments count when Increment button is pressed", () => {
    const component = create(<App />);
    const instance = component.root;

    const incrementButton = instance.findByProps({ testID: "incrementButton" });
    incrementButton.props.onPress();

    expect(instance.findByProps({ testID: "countText" }).props.children).toBe(
      "Count: 1"
    );
  });

  test("decrements count when Decrement button is pressed", () => {
    const component = create(<App />);
    const instance = component.root;

    const decrementButton = instance.findByProps({ testID: "decrementButton" });
    decrementButton.props.onPress();

    expect(instance.findByProps({ testID: "countText" }).props.children).toBe(
      "Count: -1"
    );
  });
});
