import { useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsValue } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Form, Label} from './ContactForm.styled';
import { Button, Center, Input, InputGroup} from '@chakra-ui/react'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsList = useSelector(selectContactsValue);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const newContact = { name, number };
    if (contactsList.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
    setName('');
    setNumber('');
  };

  return (
    <Center>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            size='sm'
            type="text"
            placeholder='name' 
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Number
          <InputGroup size='sm'>
            <Input 
              type='tel' 
              placeholder='phone number' 
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onInput={handleChange}
              required
            />
          </InputGroup>
        </Label>
        <Button
          type="submit"
          loadingText='Submitting'
          colorScheme='teal'
          variant='outline'
        >Submit</Button>
      </Form>
    </Center>
  );
}
