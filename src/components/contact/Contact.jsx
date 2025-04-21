import { FaPhone, FaUser } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <p className={styles.text}>
          <FaUser size={"1em"} /> {name}
        </p>
        <p className={styles.text}>
          <FaPhone size={"1em"} /> {number.slice(0, 13)}
        </p>
      </div>

      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
