import { memo } from "react";
import styles from "./text-input.module.css";

interface TextInputProps<T, U extends "text" | "number"> {
  label: string;
  value: T;
  type: U;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const TextInput = <T, U extends "text" | "number">({
  label,
  value,
  type,
  onChange,
  id,
}: TextInputProps<T, U>) => {
  return (
    <fieldset className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}:
      </label>
      <input
        type={type}
        value={String(value)}
        onChange={onChange}
        id={id}
        className={styles.inputBox}
      />
    </fieldset>
  );
};

export default memo(TextInput);
