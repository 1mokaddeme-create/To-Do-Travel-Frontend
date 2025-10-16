import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok  } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer-section'>
      <div id='logo-name'>
        <h3>To-Do travel</h3>
        <p> Explore the beauty, culture, and history of Algeria with us.</p>
      </div>

      <div id='footer-links'>
        <ul id='footer-ul'>
            <li><Link to="/" className='footer-link' >Home</Link></li>  
            <li><Link to="/destinations" className='footer-link' >Destinations</Link></li> 
            <li><Link to="/tours" className='footer-link' >Tours&packages</Link></li>
            <li><Link to ="/booking" className='footer-link' >Booking</Link></li>
            <li><Link to="/about-us" className='footer-link' >About us</Link></li>
            <li><Link to="/contact" className='footer-link' >Contact</Link></li> 
        </ul>
      </div>

      <div id='contact'>
        <div id='instagram' className='icons'>
          <FaInstagram/> 
          <p>Follow us on Instagram</p>
        </div>
        <div id='facebook' className='icons'>
          <FaFacebook/>
          <p>Follow us on Facebook</p>
        </div>
        <div id='tiktok' className='icons'>
          <FaTiktok/>
          <p>Follow us on Tik Tok</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer