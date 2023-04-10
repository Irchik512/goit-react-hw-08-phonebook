import { Link } from "react-router-dom"

export default function AuthNav() {
return(
  <ul>
    <Link to='/register'>register</Link>
    {' '}
    <Link to='/login'>log in</Link>
  </ul>
  )  
};