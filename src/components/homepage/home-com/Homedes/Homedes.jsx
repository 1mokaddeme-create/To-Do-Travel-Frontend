import React from 'react'
import { Link } from 'react-router-dom'
import './Homedes.css'

const Homedes = () => {
  const destinations =[
    {
      id: 1,
      name: "Algiers",
      description: "the capital of algeria that holds a big history",
      img:"/images/Algiers.jpg"
    },
    {
      id: 2,
      name: "Tamanrasset",
      description: "Dive into the big sahara where u find the best sunset in the world",
      img:"/images/tamanrasset.jpg"
    },
    {
      id: 3,
      name: "Oran",
      description: "The city that does'nt sleep",
      img:"/images/oran.jpg"
    }
  ]
  return (
    <section id='homedes'>
        <h2>Our best destinations:</h2>
        <div id='destinations'>
           {destinations.map((destination) => (
            <article className='dest-card' key={destination.id}>
              <img src={destination.img} alt={destination.name} className='dest-img' />
              <div className='infos-homdes'>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <Link to="/booking"><button>Book Now</button></Link>
              </div>
            </article>
           ))}      
        </div>
        <Link to={"/destinations"}><button id='exploreMore-btn'>Explore More</button></Link>
    </section>
  )
}

export default Homedes