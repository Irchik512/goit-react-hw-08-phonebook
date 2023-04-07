import Section from 'component/Section/Section';
import ContactForm from 'component/ContactForm/ContactForm';
import ContactList from 'component/ContactList/ContactList';
import Filter from 'component/Filter/Filter';
import Notification from 'component/Notification/Notification';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsValue ,selectIsLoading, selectError } from 'redux/selectors';
import {getAllContacts} from 'redux/operations'
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
    <>
      <Section> 
        <h2>Phonebook</h2>
        <ContactForm />
      </Section>
      <Section>
        <h2>Contacts</h2>   
        {isLoading && !error && <p>Request in progress...</p>}  
        {contactsList.length < 1 ? (
          <p>There is no contact yet.</p>
        ) : (
          <>
            <Filter />             
            <ContactList />
          </>
        )}
        {error !== null && <Notification>{toast.error(error)}</Notification>}   
      </Section>
    </>
  );
}
