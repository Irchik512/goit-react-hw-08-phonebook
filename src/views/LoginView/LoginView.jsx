import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input, VStack } from '@chakra-ui/react'
import { Form } from 'components/ContactForm/ContactForm.styled'
import { logIn } from 'redux/auth';
import Sections from 'components/Section/Section';
export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({email, password}));
    setEmail('');
    setPassword('');  
  };
  return(
    <Sections title='Login form'>
      <Form onSubmit={handleSubmit}>
        <VStack>
          <Input name="email" type='email' placeholder='email' size='md'  onChange={handleChange}/>
          <Input name="password" type='text' placeholder='password' size='md' onChange={handleChange}/>
          <Button colorScheme='teal' variant='outline' type='submit'>
            Button
          </Button>
        </VStack>
      </Form>
    </Sections>
  )
};