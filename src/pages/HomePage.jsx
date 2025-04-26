import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selectors";

export default function HomePage() {
  const userIsLogIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome to your PhoneBook</h1>
      {userIsLogIn ? (
        <p style={{ textAlign: "center", fontSize: 50 }}>
          HI {user.name}, <br /> you are logged in! <br /> <br />
        </p>
      ) : (
        <p style={{ textAlign: "center", fontSize: 50 }}>Please, Log IN!</p>
      )}
    </>
  );
}
