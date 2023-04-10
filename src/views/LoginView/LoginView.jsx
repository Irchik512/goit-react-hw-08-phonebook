import { Button, Input, VStack } from '@chakra-ui/react'
export default function LoginView() {
  return(
    <>
        <VStack>
          <Input placeholder='mail' size='md' />
          <Input placeholder='password' size='md' />
          <Button colorScheme='teal' variant='outline'>
            Button
          </Button>
        </VStack>
    </>
  )
};