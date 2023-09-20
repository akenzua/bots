import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import RadioButtonGroup from "./radio-group";

describe("RadioButtonGroup component", () => {
  const options = [
    { label: "Option 1", value: "1", id: "option1" },
    { label: "Option 2", value: "2", id: "option2" },
  ];

  it("should render correctly", () => {
    render(
      <RadioButtonGroup
        label="Test Group"
        name="testGroup"
        value="1"
        options={options}
        onChange={() => {}}
      />
    );

    expect(screen.getByRole("group")).toHaveTextContent("Test Group");
    expect(screen.getByLabelText("Option 1")).toBeChecked();
    expect(screen.getByLabelText("Option 2")).not.toBeChecked();
  });

  it("should call onChange handler when an option is clicked", () => {
    const handleChange = jest.fn();

    render(
      <RadioButtonGroup
        label="Test Group"
        name="testGroup"
        value="1"
        options={options}
        onChange={handleChange}
      />
    );

    userEvent.click(screen.getByLabelText("Option 2"));
    expect(handleChange).toHaveBeenCalled();
  });
});
