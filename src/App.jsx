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

      // Add this line at the top of your component
      const API_URL = process.env.REACT_APP_API_URL || "https://to-do-travel-backend-2.onrender.com";
      console.log("API_URL:", API_URL);

      const fetchDestinations = async ()=>{
        try {

          console.log("Fetching destinations from:", `${API_URL}/destinations`);
          const res = await axios.get(`${API_URL}/destinations`)
          console.log("Destinations response:", res)

          if(res.status === 200){
            console.log("Destinations data:",res.data.data)
            setDestinations(res.data.data)
          }

        } catch (error) {
          console.log("Destinations fetch error:", error)
          console.log("Error response:", error.response)
        }
      }

      const fetchTours = async ()=>{
        try {

          console.log("Fetching tours from:", `${API_URL}/tours`);
          const res = await axios.get(`${API_URL}/tours`)
          console.log("Tours response:", res)

          if(res.status === 200){
            console.log("Tours data:", res.data.data)
            setTours(res.data.data)
          }
        } catch (error) {
          console.log("Tours fetch error:", error)
          console.log("Error response:", error.response)
        }
      }

      const fetchUser = async ()=>{

        const token = localStorage.getItem("token")
        if(!token){
          return 
        }

        try {
          const res = await axios.get(`${API_URL}/myProfile`,{
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
