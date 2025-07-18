import { Navigation } from "../navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { AuthNav } from "../authNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
