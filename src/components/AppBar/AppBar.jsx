import AuthNav from "components/AuthNav/AuthNav";
import  Navigation  from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { HStack } from '@chakra-ui/react'
import { useAuth } from 'hooks/useAuth';
export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return(
   <header>
      <HStack>
        <Navigation />
        {isLoggedIn? <UserMenu/> : <AuthNav />}
        
        
      </HStack>
   </header>
  )
}