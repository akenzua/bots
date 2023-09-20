import React, { useState, useCallback, useMemo } from "react";
import TextInput from "../test-input/text-input";
import Button from "../button/button";
import RadioGroup from "../radio/radio-group";
import { validateShift, validateText } from "../../utils/validation";

import styles from "./caesar-cipher.module.css";

const CaesarCipher: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [shift, setShift] = useState<number>(0);
  const [direction, setDirection] = useState<string>("right");
  const [result, setResult] = useState<string>("");
  const [textError, setTextError] = useState<string | null>(null);
  const [shiftError, setShiftError] = useState<string | null>(null);

  const handleChangeText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setText(newValue);
      const newError = validateText(newValue);
      setTextError(newError);
    },
    []
  );

  const handleChangeShift = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(event.target.value, 10) || 0;
      setShift(newValue);
      const newError = validateShift(newValue);
      setShiftError(newError);
    },
    []
  );
  const handleChangeDirection = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDirection(event.target.value);
    },
    []
  );

  const radioOptions = useMemo(
    () => [
      { id: "2", label: "Left", value: "left" },
      { id: "1", label: "Right", value: "right" },
    ],
    []
  );

  const caesarCipher = useCallback(() => {
    setResult(
      text
        .split("")
        .map((char) => {
          let code = char.charCodeAt(0);
          if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            let offset = code < 97 ? 65 : 97;
            let directionMultiplier = direction === "right" ? 1 : -1;
            return String.fromCharCode(
              ((code - offset + directionMultiplier * shift + 26) % 26) + offset
            );
          }
          return char;
        })
        .join("")
    );
  }, [text, shift, direction]);

  return (
    <section className={styles.container}>
      <h1>Caesar Cipher</h1>
      <TextInput
        label="Text Input"
        value={text}
        type="text"
        onChange={handleChangeText}
        id="text"
      />
      {textError && <p className={styles.errorMessage}>{textError}</p>}
      <TextInput
        label="Number Input"
        value={shift}
        type="number"
        onChange={handleChangeShift}
        id="shift"
      />
      {shiftError && <p className={styles.errorMessage}>{shiftError}</p>}

      <RadioGroup
        label="Direction"
        name="direction"
        options={radioOptions}
        onChange={handleChangeDirection}
        value={direction}
      />
      <Button
        onClick={caesarCipher}
        label="Cipher"
        disabled={!!textError || !!shiftError}
      />

      <p>{`Result: ${result}`}</p>
    </section>
  );
};

export default CaesarCipher;
