import { validateText, validateShift } from "./validation";
describe("validateText", () => {
  test("should return error for empty string", () => {
    expect(validateText("   ")).toBe("Text cannot be empty");
  });

  test("should return error for string containing non-alphabetical, non-space characters", () => {
    expect(validateText("Hello123")).toBe(
      "Text can only contain letters and spaces"
    );
    expect(validateText("Hello!")).toBe(
      "Text can only contain letters and spaces"
    );
  });

  test("should return null for valid strings", () => {
    expect(validateText("Hello World")).toBe(null);
    expect(validateText("A")).toBe(null);
  });
});

describe("validateShift", () => {
  test("should return error for shift value less than 0", () => {
    expect(validateShift(-1)).toBe("Shift must be a number between 0 and 25");
  });

  test("should return error for shift value greater than 25", () => {
    expect(validateShift(26)).toBe("Shift must be a number between 0 and 25");
  });

  test("should return null for valid shift values", () => {
    expect(validateShift(0)).toBe(null);
    expect(validateShift(25)).toBe(null);
  });
});
