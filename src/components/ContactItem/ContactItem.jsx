import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <li id={id} className={css.contactList__item}>
      <span className={css.contactName}>{name}</span>: {number}
      <button
        type="button"
        className={css.contactList__button}
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};
