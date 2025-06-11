import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MultiSelect from "../multi-select";

describe("MultiSelect Component", () => {
  const mockOptions = ["Option 1", "Option 2", "Option 3"];
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test("renders closed dropdown initially", () => {
    render(<MultiSelect options={mockOptions} onChange={mockOnChange} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByText("Select options...")).toBeInTheDocument();

    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  });

  test("opens dropdown when button is clicked", () => {
    render(<MultiSelect options={mockOptions} onChange={mockOnChange} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(mockOptions.length);

    mockOptions.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test("displays selected values correctly", () => {
    render(
      <MultiSelect
        options={mockOptions}
        value={["Option 1", "Option 3"]}
        onChange={mockOnChange}
      />
    );

    expect(screen.getByText("2 options selected")).toBeInTheDocument();
  });

  test("handles checkbox selection", () => {
    render(
      <MultiSelect options={mockOptions} value={[]} onChange={mockOnChange} />
    );

    fireEvent.click(screen.getByRole("button"));

    const firstCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(firstCheckbox);

    expect(mockOnChange).toHaveBeenCalledWith(["Option 1"]);
  });

  test("handles checkbox deselection", () => {
    render(
      <MultiSelect
        options={mockOptions}
        value={["Option 1", "Option 2"]}
        onChange={mockOnChange}
      />
    );

    fireEvent.click(screen.getByRole("button"));

    const firstCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(firstCheckbox);

    expect(mockOnChange).toHaveBeenCalledWith(["Option 2"]);
  });

  test("shows correct checkbox states", () => {
    render(
      <MultiSelect
        options={mockOptions}
        value={["Option 1", "Option 3"]}
        onChange={mockOnChange}
      />
    );

    fireEvent.click(screen.getByRole("button"));

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
    expect(checkboxes[2]).toBeChecked();
  });
});
