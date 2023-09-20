import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import TextInput from "./text-input";

describe("TextInput component", () => {
  it("should render correctly with text type", () => {
    render(
      <TextInput
        label="Text Input"
        value=""
        type="text"
        onChange={() => {}}
        id="text-input"
      />
    );

    expect(
      screen.getByRole("textbox", { name: /Text Input:/i })
    ).toBeInTheDocument();
  });

  it("should render correctly with number type", () => {
    render(
      <TextInput
        label="Number Input"
        value={0}
        type="number"
        onChange={() => {}}
        id="number-input"
      />
    );

    expect(
      screen.getByRole("spinbutton", { name: /Number Input:/i })
    ).toBeInTheDocument();
  });

  it("should call onChange handler when input value changes", () => {
    const handleChange = jest.fn();

    render(
      <TextInput
        label="Text Input"
        value=""
        type="text"
        onChange={handleChange}
        id="text-input"
      />
    );

    userEvent.type(
      screen.getByRole("textbox", { name: /Text Input:/i }),
      "Hello"
    );
    expect(handleChange).toHaveBeenCalledTimes(5);
  });
});
