import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from "../checkbox";

describe("Checkbox Component", () => {
  test("renders checkbox", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("type", "checkbox");
  });

  test("handles checked state", () => {
    const mockOnChange = jest.fn();
    render(<Checkbox checked={true} onChange={mockOnChange} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  test("handles unchecked state", () => {
    const mockOnChange = jest.fn();
    render(<Checkbox checked={false} onChange={mockOnChange} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  test("handles change events", () => {
    const mockOnChange = jest.fn();
    render(<Checkbox onChange={mockOnChange} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test("applies custom classes", () => {
    render(<Checkbox className="text-2xl" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveClass("text-2xl");
  });
});
