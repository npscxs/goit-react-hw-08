import { useEffect } from "react";
import ContactForm from "../components/contactForm/ContactForm";
import SearchBox from "../components/searchBox/SearchBox";
import ContactList from "../components/contactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectContacts } from "../redux/contacts/selectors";

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <hr />
      {contacts.length > 0 ? (
        <>
          <SearchBox />
          <ContactList />
        </>
      ) : (
        <p style={{ textAlign: "center" }}>Now you have no contact, add it.</p>
      )}
    </>
  );
}
