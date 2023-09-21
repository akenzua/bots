import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CaesarCipher from "./caesar-cipher";
import { act } from "react-dom/test-utils";

describe("CaesarCipher component", () => {
  test("encrypts text using the Caesar Cipher with the right direction", () => {
    render(<CaesarCipher />);

    act(() => {
      userEvent.type(
        screen.getByRole("textbox", { name: /Text Input/i }),
        "HELLO"
      );
      userEvent.type(
        screen.getByRole("spinbutton", { name: /Shift Input/i }),
        "1"
      );
      userEvent.click(screen.getByRole("radio", { name: /Right/i }));
    });

    act(() => {
      userEvent.click(screen.getByRole("button", { name: /Cipher/i }));
    });

    expect(screen.getByText("Result: IFMMP")).toBeInTheDocument();
  });

  test("encrypts text using the Caesar Cipher with the right direction", () => {
    render(<CaesarCipher />);

    act(() => {
      userEvent.type(
        screen.getByRole("textbox", { name: /Text Input/i }),
        "HELLO"
      );
      userEvent.type(
        screen.getByRole("spinbutton", { name: /Shift Input/i }),
        "1"
      );
      userEvent.click(screen.getByRole("radio", { name: /Left/i }));
    });

    act(() => {
      userEvent.click(screen.getByRole("button", { name: /Cipher/i }));
    });

    expect(screen.getByText("Result: GDKKN")).toBeInTheDocument();
  });
});
