import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './MyProfile.css'


const MyProfile = ({userInfos}) => {

    let token = localStorage.getItem("token")

    const [myBookings, setMybookings] = useState({tours: [], destinations: []})

    const fetchBookings = async()=>{
        try {
            const res = await axios.get("http://localhost:4000/myBookings",{
                headers: { Authorization: `Bearer ${token}`}
            })

            if(res.status === 200){
                setMybookings(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchBookings()
    },[])
                                                                  
           
  return (
    <main id='my-profile'>
        <h2>My Profile</h2>

        <section id='right-side-profile'>
            <div>
                <label htmlFor="userName"><strong>User Name:</strong></label>
                <p>{userInfos?.name}</p>
            </div>
            <div>
                <label htmlFor="userEmail"><strong>Email:</strong></label>
                <p>{userInfos?.email}</p>
            </div>
            <div>
                <label htmlFor="userPhone"><strong>Phone Number:</strong></label>
                <p>{userInfos?.phoneNumber}</p>
            </div>
            <div>
                <label htmlFor="userWilaya"><strong>Wilaya:</strong></label>
                <p>{userInfos?.wilaya}</p>
            </div>
        </section>

        <section id='left-side-profile'>
            <h3>My Tours:</h3>
           {myBookings.tours.length === 0 ? (
            <p>No tours booked</p>
           ) : (
                myBookings.tours.map((tour)=>(
                <article className='booked-tour' key={tour._id}>
                    <p><strong>Tour name: </strong>{tour.tour?.name}</p>
                    <p><strong>Number of members: </strong>{tour.members}</p>
                </article>
            ))
           )}

           <h3>My Destinstionss:</h3>
           {myBookings.destinations.length === 0 ? (
            <p>No destinations booked</p>
           ) : (
            myBookings.destinations.map((destination)=>(
                <article className='booked-dest' key={destination._id}>
                    <p><strong>Destination: </strong>{destination.destination}</p>
                    <p><strong>Date: </strong>{destination.date}</p>
                </article>
            ))
           )}
        </section>
        
    </main>
  )
}

export default MyProfile
