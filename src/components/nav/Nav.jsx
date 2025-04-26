import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { fetchLogOutUser } from "../../redux/auth/operations";

export default function Header() {
  const dispatch = useDispatch();
  const userIsLogIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  const handleLogOut = () => dispatch(fetchLogOutUser());

  return (
    <header className={styles.nav}>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
          {userIsLogIn && (
            <NavLink className={styles.link} to="/contacts">
              Contacts
            </NavLink>
          )}
        </div>
        {userIsLogIn ? (
          <div className={styles.login}>
            <p className={styles.text}> Account {name ?? "User"}</p>
            <button
              className={styles.logout}
              type="button"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className={styles.navLog}>
            <NavLink className={styles.link} to="/login">
              Log In
            </NavLink>
            <NavLink className={styles.link} to="/register">
              Sign Up
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
