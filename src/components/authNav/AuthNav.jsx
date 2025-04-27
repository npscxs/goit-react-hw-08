import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={styles.navLog}>
      <NavLink className={styles.link} to="/login">
        Log In
      </NavLink>
      <NavLink className={styles.link} to="/register">
        Sign Up
      </NavLink>
    </div>
  );
};
