import { memo } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {label}
    </button>
  );
};

export default memo(Button);
