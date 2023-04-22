import ContactsListItem from 'components/ContactList/ContactsListItem';
import { ContactsList } from 'components/ContactList/ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts';

export default function ContactList() {
  const contactsList = useSelector(selectFilteredContacts);
  return (
    <ContactsList>
      {contactsList.map(contact => (
        <ContactsListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ContactsList>
  );
}
