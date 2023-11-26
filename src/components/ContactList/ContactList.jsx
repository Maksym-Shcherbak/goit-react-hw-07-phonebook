import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectVisibleContacts } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export const Contactlist = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const { isLoading, error } = useSelector(selectContacts);
  return (
    <div className={css.wrap}>
      {isLoading && <Loader />}
      {error && <p>Something went wrong, {error}</p>}
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
      <Button />
    </div>
  );
};
