import { ContactForm } from './ContactForm/ContactForm';
import { Contactlist } from './ContactList/ContactList';
import { SearchFilter } from './SearchFilter/SearchFilter';

export const App = () => {
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
