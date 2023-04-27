import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Notification from 'components/Notification/Notification';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsValue,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { getAllContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';

export default function ContactsView() {
  const contactsList = useSelector(selectContactsValue);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <Section title="Phonebook">
      <Section >
        <h3>Add new contact</h3>
        <ContactForm />
      </Section>
      <Section >
      <h3>Find your contact</h3>
        <Filter />
      </Section>
      <Section>
        <h3>All your contacts</h3>
        {isLoading && !error && <p>Request in progress...</p>}
        {contactsList.length > 0 &&(
          <ContactList />
        )}
      </Section>
      {error !== null && <Notification>{toast.error(error)}</Notification>}
    </Section>

  );
}
