import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export default function RegisterView() {

  return(
    <>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder='name' size='md' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Mail</FormLabel>
        <Input type='email' placeholder='mail' size='md' />
        <FormLabel>Password</FormLabel>
        <Input placeholder='password' size='md' />
      </FormControl>
      <Button colorScheme='teal' variant='outline'>
            Button
      </Button></>
      
  )
};