import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Select from "../select";

describe("Select Component", () => {
  const mockOptions = ["Option 1", "Option 2", "Option 3"];

  test("renders select with options", () => {
    render(<Select options={mockOptions} />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    mockOptions.forEach((option) => {
      expect(screen.getByRole("option", { name: option })).toBeInTheDocument();
    });
  });

  test("handles value changes", () => {
    const mockOnChange = jest.fn();
    render(<Select options={mockOptions} onChange={mockOnChange} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Option 2" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test("applies custom classes", () => {
    render(<Select options={mockOptions} className="text-2xl" />);
    const wrapper = screen.getByRole("combobox").parentElement;
    expect(wrapper).toHaveClass("text-2xl");
  });
});
