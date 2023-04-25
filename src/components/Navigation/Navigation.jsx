import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

return(
  <nav>
    <NavLink to='/'>HOME</NavLink>
    {isLoggedIn && (<NavLink to='/contacts'>Contacts</NavLink>)}
  </nav>
  )  
};