import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    console.log(filter);
    if (filter.enteredName) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.enteredName.toLowerCase())
      );
    }
    return contacts;
  }
);
