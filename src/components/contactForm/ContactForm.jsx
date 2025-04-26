import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { addContact } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";

const NewUserShema = object().shape({
  name: string()
    .min(3, "The name must contain at least 3 characters")
    .max(50, "The name must contain at least 50 characters")
    .required("Required field"),
  number: string()
    .matches(/^\d+$/, "Only numbers are allowed")
    .min(3, "The number must contain at least 3 characters")
    .max(14, "The number must contain at least 14 characters")
    .required("Required field"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (data, action) => {
    if (data.name.trim() === "" || data.number.trim() === "") {
      return;
    }

    dispatch(addContact(data));

    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={NewUserShema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.inputWrapper}>
          <label htmlFor="name">Name:</label>
          <Field
            className={styles.input}
            type="text"
            name="name"
            id="name"
            autoComplete="off"
          />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="number">Number:</label>
          <Field
            className={styles.input}
            type="text"
            name="number"
            id="number"
            autoComplete="off"
          />
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
