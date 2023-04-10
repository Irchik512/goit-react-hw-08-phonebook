import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
// import Notification from 'components/Notification/Notification';
// import { toast } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContactsValue ,selectIsLoading, selectError } from 'redux/contacts/contactsSelectors';
// import {getAllContacts} from 'redux/contacts/contactsOperations'
// import { useEffect } from 'react';

export default function ContactsView() {
  // const contactsList = useSelector(selectContactsValue);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  
  // useEffect(() => {
  //   dispatch(getAllContacts());
  // }, [dispatch]);

  return (
    <>
      <Section> 
        <h2>Phonebook</h2>
        <ContactForm />
      </Section>
      <Section>
        <h2>Contacts</h2>   
        {/* {isLoading && !error && <p>Request in progress...</p>}   */}
        {/* {contactsList.length < 1 ? ( */}
          <p>There is no contact yet.</p>
        {/* ) : ( */}
          <>
            <Filter />             
            <ContactList />
          </>
        {/* )} */}
        {/* {error !== null && <Notification>{toast.error(error)}</Notification>}    */}
      </Section>
    </>
  );
}
