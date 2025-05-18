import PasswordStrengthBar from "react-password-strength-bar";
import s from "./ProgressBar.module.css";

const ProgressBar = ({ confirmPassword }) => {
  return (
    <div style={s.text}>
      <PasswordStrengthBar confirmPassword={confirmPassword} />
    </div>
  );
};

export default ProgressBar;
