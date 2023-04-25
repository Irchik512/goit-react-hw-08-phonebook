import AuthNav from "components/AuthNav/AuthNav";
import { NavLink } from 'react-router-dom';
import UserMenu from "components/UserMenu/UserMenu";
import { useAuth } from 'hooks/useAuth';
import { Container, Flex,} from "@chakra-ui/react";
import {Header, Nav}  from './AppBar.styled';


export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return(
   <Header>
    <Container display="flex" justifyContent="space-between">
    <Nav>
      <NavLink to='/'>HOME</NavLink>
      {isLoggedIn && (<NavLink to='/contacts'>CONTACTS</NavLink>)}
    </Nav>
    <Flex minW={'250px'} justify={"space-between"}>
      {isLoggedIn? <UserMenu/> : <AuthNav />}
    </Flex>
    </Container>
   </Header>
  )
}