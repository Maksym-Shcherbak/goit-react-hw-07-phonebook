import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const Contactlist = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  console.log(filteredContacts);
  return (
    <ul className={css.contactList}>
      {filteredContacts &&
        filteredContacts.map(({ id, name, phone }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={phone}
          ></ContactItem>
        ))}
    </ul>
  );
};
