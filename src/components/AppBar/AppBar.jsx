import AuthNav from "components/AuthNav/AuthNav";
import  Navigation  from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { HStack } from '@chakra-ui/react'
export default function AppBar() {
  return(
   <header>
      <HStack>
        <Navigation />
        <AuthNav />
        <UserMenu/>
      </HStack>
   </header>
  )
}