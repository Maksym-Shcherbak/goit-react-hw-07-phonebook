import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { Contactlist } from './ContactList/ContactList';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectModal } from 'redux/selectors';
import { Modal } from './Modal/Modal';

export const App = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(selectModal);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h1 className="phonebookTitle">Phonebook</h1>
        <SearchFilter />
        <h2 className="contactsTitle">Contacts</h2>
        <Contactlist />
      </div>
      {showModal && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
    </>
  );
};
