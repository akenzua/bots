import styles from "./radio-input.module.css";

interface RadioInputProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const RadioInput: React.FC<RadioInputProps> = ({
  label,
  value,
  checked,
  onChange,
  id,
}) => (
  <label className={styles.inputLabel}>
    <input
      type="radio"
      value={value}
      checked={checked}
      onChange={onChange}
      id={id}
      className={styles.radioInput}
    />
    {label}
  </label>
);

export default RadioInput;
