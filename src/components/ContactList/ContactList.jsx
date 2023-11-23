import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

const getFilteredContacts = (contacts, { enteredName }) => {
  if (enteredName) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(enteredName.toLowerCase())
    );
  }
  return contacts;
};

export const Contactlist = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, statusFilter);

  return (
    <ul className={css.contactList}>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
          ></ContactItem>
        ))}
    </ul>
  );
};
