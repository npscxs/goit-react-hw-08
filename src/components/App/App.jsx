import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { DotLoader } from "react-spinners";
import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";
import "./App.css";
import { selectError, selectLoading } from "../../redux/contactsSlice";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <DotLoader color="red" size={15} />}
      {error && <p>Error...</p>}
      {!loading && !error && <ContactList />}
    </>
  );
}

export default App;
