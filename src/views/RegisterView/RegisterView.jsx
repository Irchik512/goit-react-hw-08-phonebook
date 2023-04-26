import { Center, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { Form } from "./RegisterView.styled";
import Sections from "components/Section/Section";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {register} from 'redux/auth'

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
console.log({name, email, password});
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({name, email, password}));
    setName('');
    setEmail('');
    setPassword('');  
  };
  return(
    <Sections>
      <Center>
        <Form  onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" type='text' placeholder='name' size='md' onChange={handleChange} />
            <FormLabel>Email</FormLabel>
            <Input name="email" type='email' placeholder='email' size='md' onChange={handleChange} />
            <FormLabel>Password</FormLabel>
            <Input name="password" type='text' placeholder='password' size='md' onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme='teal' variant='solid'>
            Submit
          </Button>
        </Form>
      </Center>
    </Sections>
      
  )
};