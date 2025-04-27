import { lazy, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import Layout from "../layout/Layout";

const Container = lazy(() => import("../container/Container"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));

import Loader from "../loader/Loader";
import RestrictedRout from "../restrictedRoute/RestrictedRoute";
import PrivateRout from "../privateRoute/PrivateRoute";
import Section from "../section/Section";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Section>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRout
                component={<RegisterPage />}
                redirectTo={"/contacts"}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRout
                component={<LoginPage />}
                redirectTo={"/contacts"}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRout component={<ContactsPage />} redirectTo={"/login"} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </Section>
  );
}

export default App;
