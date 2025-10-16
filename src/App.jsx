import React, { useEffect, useState } from 'react'
import {  BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './components/homepage/Home'
import Booking from './components/Booking/Booking'
import Navbar from './components/homepage/home-com/nav-bar/Navbar'
import Footer from './components/homepage/home-com/footer/Footer'
import Destinations from './components/destination/Destinations'
import Tours from './components/Tours/Tours'
import ToursDetails from './components/Tours/ToursDetails'
import MyProfile from './components/myProfile/MyProfile'
import Login from './components/login/Login'
import axios from 'axios'
import Register from './components/Register/Register'
import About from './components/About-us/About-us'

const App = () => {

      const [isLoggedin, setIsloggedin] = useState(false)

      const [tours, setTours] = useState([])

      const [destinations, setDestinations] = useState([])

      const [userinfos, setUserinfos] = useState(null)

      const fetchDestinations = async ()=>{
        try {
          const res = await axios.get("http://localhost:4000/destinations")

          if(res.status === 200){
            setDestinations(res.data.data)
          }
        } catch (error) {
          console.log(error)
        }
      }

      const fetchTours = async ()=>{
        try {
          const res = await axios.get("http://localhost:4000/tours")
          console.log(res)

          if(res.status === 200){
            setTours(res.data.data)
          }
        } catch (error) {
          console.log(error)
        }
      }

      const fetchUser = async ()=>{

        const token = localStorage.getItem("token")
        if(!token){
          return 
        }

        try {
          const res = await axios.get("http://localhost:4000/myProfile",{
            headers: {Authorization: `Bearer ${token}`}
          })

          console.log(res)

          if(res.status === 200){
            setUserinfos(res.data)
          }
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token) {
          setIsloggedin(true)
        }
        fetchTours()
        fetchDestinations()
        fetchUser()
      }, [isLoggedin])

  return (
    <Router>
      <Navbar setIsloggedin = {setIsloggedin} isLoggedin = {isLoggedin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/destinations" element={<Destinations destinations = {destinations}/>}/>
        <Route path="/booking" element={<Booking userInfos = {userinfos}/>}/>
        <Route path="/tours" element={<Tours tours = {tours} />}/>
        <Route path="/tours/:tourname" element={<ToursDetails tours = {tours} userInfos = {userinfos}/>}/>
        <Route path="/myProfile" element = {<MyProfile userInfos = {userinfos}/>}/>
        <Route path="/login" element={<Login setIsloggedin = {setIsloggedin} />}/>
        <Route path="/register" element={<Register setIsloggedin = {setIsloggedin} />}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
