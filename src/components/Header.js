import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

const Header = () => {

  // const [username , setUsername]= useState(null);
  /* on a ajouter setUserinfo qui contient les info de users */ 
const {setUserInfo , userInfo} = useContext(UserContext)
const path = 'http://localhost:4000/profile'
  useEffect(() => {
    fetch(path, {
    credentials:'include' ,
    }).then( response => {
      response.json().then(userInfo => {
      // setUsername(userInfo.username)
      setUserInfo(userInfo)
      })
    })
    }, []);

    const Logout = ()=> {
 
fetch('http://localhost:4000/logout' , {

credentials:'include',
method:"POST",
})
setUserInfo(null)

    }

    /* le ? car userInfo can be empty*/
    const username = userInfo?.username;
  
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