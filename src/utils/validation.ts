export const validateText = (value: string) => {
  if (value.trim() === "") {
    return "Text cannot be empty";
  }
  if (/[^a-zA-Z\s]/.test(value)) {
    return "Text can only contain letters and spaces";
  }
  return null;
};

export const validateShift = (value: number) => {
  return value < 0 || value > 25
    ? "Shift must be a number between 0 and 25"
    : null;
};
