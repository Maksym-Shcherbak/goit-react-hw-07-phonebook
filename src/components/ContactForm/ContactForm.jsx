import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onHandleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, number } = form.elements;
    const isExist = isInPhonebook(name.value, contacts);
    if (isExist) {
      alert(`${name.value} is already in contacts.`);
      return;
    }
    console.log(name.value, number.value);
    dispatch(addContact({ name: name.value, phone: number.value }));
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
