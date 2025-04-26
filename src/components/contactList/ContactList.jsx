import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return filteredContacts.length > 0 ? (
    <ul className={styles.list}>
      {filteredContacts.map((el) => (
        <li className={styles.item} key={el.id}>
          <Contact contact={el} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No items!</p>
  );
}
