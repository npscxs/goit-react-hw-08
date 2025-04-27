import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { fetchLogOutUser } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  const handleLogOut = () => dispatch(fetchLogOutUser());

  return (
    <div className={styles.login}>
      <p className={styles.text}> Account {name ?? "User"}</p>
      <button className={styles.logout} type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};
