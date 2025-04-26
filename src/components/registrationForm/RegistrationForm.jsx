import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";

import styles from "./RegistrationForm.module.css";
import { fetchRegisterUser } from "../../redux/auth/operations";

const userShema = object().shape({
  name: string()
    .min(3, "The name must contain at least 3 characters")
    .max(50, "The name must contain at least 50 characters")
    .required("Required field"),
  email: string().email("Invalid value").required("Required field"),
  password: string()
    .min(7, "The password must contain at least 3 characters")
    .required("Required field"),
});

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (data, action) => {
    if (data.email.trim() === "" || data.password.trim() === "") {
      return;
    }

    dispatch(fetchRegisterUser(data));

    action.resetForm();
  };

  return (
    <>
      <h2 className={styles.header}>Registration</h2>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={userShema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.inputWrapper}>
            <label htmlFor="name">User name: </label>
            <Field
              className={styles.input}
              type="text"
              name="name"
              id="name"
              autoComplete="off"
            />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="span"
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="email">Email: </label>
            <Field
              className={styles.input}
              type="email"
              name="email"
              id="email"
              autoComplete="off"
            />
            <ErrorMessage
              className={styles.error}
              name="email"
              component="span"
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password:</label>
            <Field
              className={styles.input}
              type="password"
              name="password"
              id="password"
              autoComplete="off"
            />
            <ErrorMessage
              className={styles.error}
              name="password"
              component="span"
            />
          </div>

          <button className={styles.button} type="submit">
            Sign up
          </button>
        </Form>
      </Formik>
    </>
  );
}
