import React from "react";
import { create } from "react-test-renderer";
import App from "./App";

describe("App component", () => {
  test("sum function adds 3 + 5 to equal 8", () => {
    const component = create(<App />);
    const instance = component.root;

    // Find the Text component and extract its children (the result)
    const resultText = instance.findByType("Text").props.children;

    // Extract the number from the resultText (e.g., "Result: 8" -> 8)
    const result = parseInt(resultText.split(" ")[1]);

    expect(result).toBe(8);
  });
});
