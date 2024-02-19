import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SideBar from "./SideBar";
import { renderWithTranslation } from "shared/lib/helpers/tests/renderWIthTranslation";

describe("Sidebar", () => {
  test("Test sidebar to render", () => {
    renderWithTranslation(SideBar);
    expect(screen.queryByTestId("sidebar")).toBeDefined();
  });
  test("Test to open and close sidebar status", () => {
    renderWithTranslation(SideBar);
    const toggleBtn = screen.queryByTestId("sidebar-toggle");

    fireEvent.click(toggleBtn);

    expect(screen.queryByTestId("sidebar")).toHaveClass("collapsed");
  });
});
