import { useSelector } from "react-redux";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";
import {
  selectContactsError,
  selectContactsLoading,
} from "../../redux/contacts/selectors";
import styles from "./Container.module.css";
import Loader from "../loader/Loader";
import Layout from "../layout/Layout";

export default function Container({ children }) {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const contactsLoading = useSelector(selectContactsLoading);
  const contactsError = useSelector(selectContactsError);
  return (
    <div className={styles.container}>
      <Layout />
      {authLoading ?? contactsLoading ? (
        <Loader />
      ) : authError ?? contactsError ? (
        <p style={{ textAlign: "center" }}>
          Something went wrong. Please reload page.
        </p>
      ) : (
        children
      )}
    </div>
  );
}
