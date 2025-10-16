import React from 'react'
import { Link } from 'react-router-dom'
import './Destinations.css'

const Destinations = ({destinations}) => {

  return (
    <main id='destinations-page'>
      <div id='destination-header'>
        <header>Discover Algeria with US</header>
        <p>From the Mediterranean coast to the Sahara desert —  explore Algeria's hidden gems hidden gems.</p>
      </div>
      <section id='destination'>
        {destinations.map((destination) => (
          <article className='destination-card' key={destination._id} >
            <img src={destination.image} alt={destination.name} className='destination-image' />
            <div className='infos'>
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </div>
            <Link to="/booking"><button className='des-bookingBtn'>Book NOW</button></Link>

          </article>
        ))}
      </section>
    </main>
  )
}

export default Destinations