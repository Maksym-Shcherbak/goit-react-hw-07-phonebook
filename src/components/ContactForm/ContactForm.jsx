import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onHandleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, number } = form.elements;
    const isExist = isInPhonebook(name.value, contacts);
    if (isExist) {
      alert(`${name.value} is already in contacts.`);
      return;
    }
    dispatch(addContact(name.value, number.value));
    form.reset();
  };

  const isInPhonebook = (name, contacts) => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <form className={css.contactForm} onSubmit={onHandleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        className={css.contactForm__input}
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        className={css.contactForm__input}
        id="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
      />
      <button type="submit" className={css.contactForm__button}>
        Add contact
      </button>
    </form>
  );
};
