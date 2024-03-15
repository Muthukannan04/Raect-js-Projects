import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Sytle.css'
import { UseAuth } from './Auth'
const Nav= () => {
  const auth = UseAuth();
  return (
    <div>
     <nav className='navbar'> 
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>User</NavLink>
        <NavLink to='/admin'>Admin</NavLink>
      {!auth.user &&  <NavLink to='/login'>Login</NavLink> }
       {!auth.user && <NavLink to='/signup'>Signup</NavLink> }
        
</nav>
</div>
)
}
export default Nav