import styles from "./Header.module.css";
import Logo from "../assets/Logo.svg";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Logo" />
    </div>
  );
};
