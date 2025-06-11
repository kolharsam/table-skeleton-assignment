import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../button";

describe("Button Component", () => {
  test("renders button with button name", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
  });

  test("handles click events", () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Click me</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("applies custom classes", () => {
    render(<Button className="bg-amber-50 text-2xl">Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-amber-50", "text-2xl");
  });

  test("renders button with icon and text", () => {
    render(
      <Button>
        <span>Icon</span> Submit
      </Button>
    );
    expect(screen.getByText("Icon")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
