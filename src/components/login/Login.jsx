import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { fetchLogInUser } from "../../redux/auth/operations";

const userShema = object().shape({
  email: string().email("Invalid value").required("Required field"),
  password: string()
    .min(3, "The password must contain at least 3 characters")
    .required("Required field"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (data, action) => {
    if (data.email.trim() === "" || data.password.trim() === "") {
      return;
    }

    dispatch(fetchLogInUser(data));

    action.resetForm();
  };

  return (
    <>
      <h2 className={styles.header}>Log IN</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={userShema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
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
            Log In
          </button>
        </Form>
      </Formik>
    </>
  );
}
