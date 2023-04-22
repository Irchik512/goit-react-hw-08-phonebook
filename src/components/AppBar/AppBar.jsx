import AuthNav from "components/AuthNav/AuthNav";
import  Navigation  from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { HStack } from '@chakra-ui/react'
import { selectIsLoggedIn } from "redux/auth";
import { useSelector } from "react-redux";
export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return(
   <header>
      <HStack>
        <Navigation />
        {isLoggedIn? <UserMenu/> : <AuthNav />}
        
        
      </HStack>
   </header>
  )
}