import  Section  from "components/Section/Section";
import { Heading, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";

export default function HomeView() {
  return(
    <Section>
      <Heading as='h1' size='3xl' p={'90px 0'} >
        Create your own 'web' PhoneBook!
      </Heading>        
        <ButtonGroup gap='4'>
        <Button colorScheme='blackAlpha'><Link to='/register'>Registration</Link></Button>
        <Button colorScheme='blackAlpha'><Link to='/login'>Login</Link></Button>
      </ButtonGroup>
    </Section>
  )
};