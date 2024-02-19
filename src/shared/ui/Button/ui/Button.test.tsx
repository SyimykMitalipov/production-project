import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import Button, { ThemeButton } from "./Button";

describe("Button", () => {
  test("Test button render fc", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  test("Test button render with Theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
    screen.debug();
  });
});
