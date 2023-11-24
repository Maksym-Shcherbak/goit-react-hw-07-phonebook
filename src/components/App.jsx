import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { Contactlist } from './ContactList/ContactList';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="phonebookTitle">Phonebook</h1>
      <ContactForm />
      <h2 className="contactsTitle">Contacts</h2>
      <Contactlist />
      <SearchFilter />
    </div>
  );
};
