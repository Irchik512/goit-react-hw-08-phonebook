import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Center, FormControl, Input, Button, FormLabel } from "@chakra-ui/react";
import { Form } from '../RegisterView/RegisterView.styled'
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
  };
  return(
    <Sections title='Login form'>
      <Center>
        <Form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
            <Input name='email' type='email' placeholder='email' size='md'  onChange={handleChange}/>
          <FormLabel>Password</FormLabel>
            <Input name='password' type='password' placeholder='password' size='md' onChange={handleChange}/>
          </FormControl>
            <Button colorScheme='teal' variant='solid' type='submit' marginTop={'12px'}>
              Submit
            </Button>
        </Form>
      </Center>
    </Sections>
  )
};