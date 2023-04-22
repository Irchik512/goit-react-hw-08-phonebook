import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from 'redux/filter';
export const selectContactsValue = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContactsValue, selectFilterValue],
  (contacts, value) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase().trim())
    );
  }
);
