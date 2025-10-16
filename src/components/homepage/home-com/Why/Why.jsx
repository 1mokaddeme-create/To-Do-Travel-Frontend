import React from 'react';
import { FaMapSigns } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import './Why.css';
import { Link } from 'react-router-dom';

const Why = () => {
  return (
    <section id="why-section">
      <img src="/images/why6.jpg" alt="Algeria" className='why1-image'/>
      <img src="/images/hppy.jpg" alt="Algeria" className='why2-image'/>
      <div id='why-seclayer'>
          <div id='why-right'>
           <h2>Why Choose Us?</h2>
           <div id="raisons">
             <div className="raison">
               <div className="raison-header">
                  <FaMapSigns className="map-icon"/>
                  <h5>Wide Range of Destinations</h5>
               </div>
               <p>From the Sahara to the coast; explore Algeria's most iconic and hidden gems.</p>
             </div>

             <div className="raison">
              <div className="raison-header">
                 <FaHandHoldingDollar className="price-icon" />
                 <h5>Best Price Guarantee</h5>
              </div>
              <p>Enjoy unforgettable experiences with packages that fit your budget.</p>
             </div>

             <div className="raison">
              <div className="raison-header">
                <AiOutlineSafety className="safety-icon" />
                <h5>Trusted & Safe</h5>
              </div>
                  <p>Travel with confidence thanks to our 20 years of reliable service.</p>
             </div>

             <div className="raison">
              <div className="raison-header">
                <FaUserCheck className="user-icon" />
                <h5>Personalized Service</h5>
              </div>
              <p>Your journey is tailored to your style, needs, and preferences.</p>
             </div>
            </div>
           </div>

          <div id='why-left'>
           <img src="/images/why4.png" alt="why.image" id='png-image'/>
          </div>

          <div id='ready-section'>
            <div id='ready-text'>
              <h4>✈️ Let's plan your perfect trip!!!</h4>
              <p>We'll help you book your dream destinations at the best prices.</p>
            </div>
            <Link to="/booking"><button className='contact-btn'>Start Your Joureny</button></Link>
          </div>
      </div>
    </section>
  )
};

export default Why;



