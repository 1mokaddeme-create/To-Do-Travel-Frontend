import React from 'react';
import { Link } from 'react-router-dom';
import './Tours.css';

const Tours = ({tours }) => {

  return (
    <main id='Tour-page'>
        <header id='tours-header'>
            <h2>Our Tours & Packages</h2>
            <p>Choose from our exclusive tours across Algeria.</p>
        </header>
        <section id='Tours-section' >
            {tours.map((tour) => (
                <article key={tour._id}>
                    <article className='tour-card' key={tour._id}>
                        <img src={tour.image} alt={tour.name} className='tour-image'/>
                        <div className='tour-infos'>
                            <h4>{tour.name}</h4>
                            <p>{tour.description}</p>
                            <div className='price-date'>
                                <p><strong>{tour.price}</strong> per person</p>
                                <p><strong>Date: </strong>{tour.date}</p>
                            </div>
                        </div>
                        <Link to={`/tours/${tour.name}`}><button id='tour-bookingBtn'>Explore more</button></Link>
                    </article>
                </article>
            ))}
        </section>
    </main>
  )
}

export default Tours




