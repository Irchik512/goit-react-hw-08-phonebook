import PropTypes from 'prop-types';
import { Contact } from 'components/ContactList/ContactsListItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { deleteContactById } from 'redux/contacts';

export default function ContactsListItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <Contact>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => dispatch(deleteContactById(id))} >
        Delete
      </Button>
    </Contact>
  );
}

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
