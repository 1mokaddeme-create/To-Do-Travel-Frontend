import React, { useEffect, useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import './Navbar.css'

const Navbar = ({setIsloggedin, isLoggedin}) => {

  const [isOpen, setIsOpen] = useState(false)

  const logOut = (event) =>{
     localStorage.removeItem("token")
     setIsloggedin(false)
  }

  return (
    <header className='navabar'>
      <div id='webname'>
        <p>To-Do-Travel</p>
      </div>
      {/* hamburger coded with chatgpt (the idea of isOpen) */}
      <button id='hamburger' onClick={() => setIsOpen(!isOpen)}> 
         ☰
      </button>

      <nav id='links' className={isOpen ? "open" : ""}>
        <ul id='nav-ul'>
          <li><Link to="/" className='nav-link'>Home</Link></li>  
          <li><Link to="/destinations" className='nav-link'>Destinations</Link></li> 
          <li><Link to="/tours" className='nav-link'>Tours&packages</Link></li>
          <li><Link to ="/booking" className='nav-link'>Booking</Link></li>
          <li><Link to="/About" className='nav-link'>About us</Link></li>          
          {isLoggedin ? (
            <>
              <li><Link to ="/myProfile" className='nav-link'>My Profile</Link></li>
              <li><Link to = "/"><button className='button' onClick = {logOut}>Log Out</button></Link></li>
            </>
          ) : (
            <>
              <li><Link to="/login" ><button className='button'>Log in</button></Link></li>
              <li><Link to="/register" ><button className='button'>Register</button></Link></li>
            </>
          )}
        </ul>
      </nav>
    
    </header>
  )
}

export default Navbar