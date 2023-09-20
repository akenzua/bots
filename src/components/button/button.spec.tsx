import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Button from "./button";

test("Button component", () => {
  const handleClick = jest.fn();

  render(<Button onClick={handleClick} label="Click Me" />);

  const button = screen.getByRole("button", { name: /click me/i });
  expect(button).toBeInTheDocument();

  userEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
