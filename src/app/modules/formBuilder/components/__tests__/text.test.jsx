import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextBox from "../text";

describe("TextBox Component", () => {
  test("renders input with correct type", () => {
    render(<TextBox type="email" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
  });

  test("applies custom classes", () => {
    render(<TextBox className="text-2xl" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("text-2xl");
  });

  test("handles value and onChange", () => {
    const mockOnChange = jest.fn();
    render(<TextBox value="test value" onChange={mockOnChange} />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("test value");

    fireEvent.change(input, { target: { value: "new value" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
