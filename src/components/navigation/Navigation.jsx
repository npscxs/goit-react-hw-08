import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const userIsLogIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={styles.navLinks}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      {userIsLogIn && (
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
