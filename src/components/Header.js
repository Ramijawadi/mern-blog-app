import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const [username , setUsername]= useState(null);

const path = 'http://localhost:4000/profile'
  useEffect(() => {
    fetch(path, {
    credentials:'include' ,
    }).then( response => {
      response.json().then(userInfo => {
      setUsername(userInfo.username)
      })
    })
    }, []);

    const Logout = ()=> {
 
fetch('http://localhost:4000/logout' , {

credentials:'include',
method:"POST",
})
setUsername(null);

    }
  
  return (
    <header>
<Link to='/' className='logo'>My Blog </Link>

<nav>
  {username && (
    <>
    <Link to ={'/create'}> Create new Post</Link>
    <a onClick={Logout}>Logout</a>
    </>
  )}

  {!username && (
    <>
    <Link to='/login'>Login</Link>
    <Link to='/register'>register</Link>
    </>
  )}
  


</nav>

</header>
  )
}

export default Header