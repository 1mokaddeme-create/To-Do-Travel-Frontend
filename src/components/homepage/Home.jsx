import React from 'react'

import Herosec from './home-com/hero-sec/Herosec'
import Homedes from './home-com/Homedes/Homedes'
import Why from './home-com/Why/Why'



export const Home = () => {
  return (
    <div id='home-div'>  
      <Herosec />
      <Homedes />
      <Why/>
    </div>
  )
}

export default Home
