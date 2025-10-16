import React from 'react'
import { Link } from 'react-router-dom'
import './Herosec.css'

const Herosec = () => {
  return (
    <div id='herosec'>
          <img src="/images/Algeria4.jpg" alt="Algeria" className='herosec-image'/>
          <div className='seclayer'>
            <div className='image-text'>
              <div>
               <h1>Discover <strong>ALGERIA </strong>with us</h1>
               <h3>Your trusted travel agency for unforgettable journeys</h3>
              </div>
              <div>
                <Link to="/destinations"><button type="submit" className='explore-btn'>Explore our destinations</button></Link>  
              </div>          
            </div> 
          </div>
    </div>
  )
}

export default Herosec