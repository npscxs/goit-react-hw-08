import { FaPhone, FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.wrapper}>
      <img
        src={
          contact.avatar ??
          `https://ui-avatars.com/api/?name=${contact.name}&background=random`
        }
        alt={`Avatar by ${contact.name}`}
        className={styles.image}
      />
      <div className={styles.description}>
        <p className={styles.text}>
          <FaUser size={"1em"} /> {contact.name}
        </p>
        <p className={styles.text}>
          <FaPhone size={"1em"} /> {contact.number.slice(0, 12)}
        </p>
      </div>
      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
