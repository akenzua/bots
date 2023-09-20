import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import RadioInput from "./radio-input";

describe("RadioInput Component", () => {
  let mockOnChangeHandler: jest.Mock;

  beforeEach(() => {
    mockOnChangeHandler = jest.fn();
  });

  test("should render with the correct label", () => {
    render(
      <RadioInput
        label="Test Label"
        value="test_value"
        checked={false}
        onChange={mockOnChangeHandler}
        id="test_id"
      />
    );

    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  test("should call onChange handler when clicked", () => {
    render(
      <RadioInput
        label="Test Label"
        value="test_value"
        checked={false}
        onChange={mockOnChangeHandler}
        id="test_id"
      />
    );

    userEvent.click(screen.getByRole("radio"));
    expect(mockOnChangeHandler).toHaveBeenCalled();
  });

  test("should be checked when the checked prop is true", () => {
    render(
      <RadioInput
        label="Test Label"
        value="test_value"
        checked={true}
        onChange={mockOnChangeHandler}
        id="test_id"
      />
    );

    expect(screen.getByRole("radio")).toBeChecked();
  });
});
