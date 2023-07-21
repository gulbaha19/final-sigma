import { FC } from "react";
import styles from "./button.module.scss";
interface ButtonProps {
  type: string;
  title: string;
  onClick: () => void;
  button: boolean;
}
const Button: FC<ButtonProps> = ({ type, title, onClick, button }) => {
  return (
    <button className={`${styles.button} ${styles[type]}`} onClick={() => onClick()}>
      {title}
      {button && (
        <span>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
            <path
              d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      )}
    </button>
  );
};
export default Button;
