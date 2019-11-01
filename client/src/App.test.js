import React from "react";
import DarkMode from "./components/DarkMode/DarkMode";
import { render, fireEvent } from "@testing-library/react";
import { getData } from "./App";

describe("dark mode", () => {
  test("render dark mode component", () => {
    const container = render(<DarkMode />);
    container.getByText(/Dark Mode/i);
  });

  test("toggle dark mode", () => {
    const container = render(<DarkMode />);
    fireEvent.click(container.getByTestId("darkbutton"));
    expect(container.baseElement.classList.contains("dark")).toBe(true);
  });
});

describe("API Calls", () => {
  test("Gets data from api", () => {
    getData((result, status) => {
      expect(status).toBe(true);
    });
  });
});
