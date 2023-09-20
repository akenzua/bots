import { memo } from "react";
import RadioInput from "./radio-input";
import styles from "./radio-input.module.css";

interface RadioButtonGroupProps {
  label: string;
  name: string;
  value: string;
  options: { label: string; value: string; id: string }[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  label,
  name,
  value,
  options,
  onChange,
}) => {
  return (
    <fieldset className={styles.radioWrapper}>
      <legend>{label}</legend>
      {options.map((option) => (
        <RadioInput
          key={option.value}
          label={option.label}
          value={option.value}
          checked={value === option.value}
          onChange={onChange}
          id={option.id}
        />
      ))}
    </fieldset>
  );
};

export default memo(RadioButtonGroup);
