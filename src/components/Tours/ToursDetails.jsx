import React, { useRef, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import './ToursDetails.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';



const ToursDetails = ({tours, userInfos}) => {
    console.log("starting")
    const navigate = useNavigate()
    const [isConfirmed, setIsConfirmed] = useState(false)
    const membersRef = useRef()
    const [errorMessage, setErrorMessage] = useState('')

    const { tourname } = useParams();
    const decodedName = tourname ? decodeURIComponent(tourname) : '';
    const tour = tours.find((t) => t.name === decodedName) 

    if(!userInfos){
      return <Navigate to="/login" replace />
    }

    const images = tour.images ? Object.values(tour.images).filter(Boolean) : []; //change the object into array to map it

    if(!tour) return <p>Sorry, Tour not available</p>
    
    console.log("before handling members")
    const handleMembers = (event) => {
      console.log("1")
      setErrorMessage('')
    }


    const confirme = async (event) =>{
       console.log("2")
        event.preventDefault()
      
       const membersNumber = parseInt(membersRef.current.value, 10);// parseInt to convert the members into a number, and the 10 means deciml
      
       console.log("Parsed membersNumber:",membersNumber)
       console.log("Validation check:",membersNumber<1 || membersNumber > 20 || isNaN(membersNumber))

       //checks the value of members if it is 0 or negative
       if( membersNumber<1 || membersNumber>20 || isNaN(membersNumber)){
        console.log("invalid members value", membersNumber)
        console.log("setting error message")
        setErrorMessage('Number of members must be between 1 and 20')
        return 
       }

       console.log("validation passed")

       if(!tour || !tour._id){
        console.log("invalid tour")//check if the tour and his id exist (verify the id since we send it to the back-end)
        return 
       }
        const tourId = tour._id;
       
       // get the token from locla storager
       const token = localStorage.getItem("token");
       //check if the token exists
       if (!token) {
          console.error("No token, log in needed");
          //if token does not xist, return the user to login page
          navigate("/login");
          return;
       }


        try {
          const res = await axios.post("http://localhost:4000/user/tour",{
          members: membersNumber,
          tour: tourId,
          },{
            headers: {Authorization: `Bearer ${token}`}
          }) 

          console.log("Booking res:", res)

         if(res.status === 201){
            setIsConfirmed(true)
          } else { 
            console.log("Unexpected error", res.status,) 
            setErrorMessage('Booking failed, Please try again')
          }
        } catch (error) {
          console.log(error)
          setErrorMessage('Booking failed, Please try again')
        }
    }


    return (
       <main id='tour-booking-page'>
          <h2 id='tour-header' >Tour Booking Form</h2>
          { isConfirmed ? (
             <p>Thank you! Your booking request has been submitted</p>
            ) : (
              <div id='details-page'>
                <div id='left-side'>
                  <div id='left-side-infos'>
                    <p><strong>Hotel: </strong> 3 nights at 'Hotel name'</p>
                    <h5>Tour description: </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10} //space between slides
                    slidesPerView={1} //number of slides
                    navigation //for he navigation between slides
                    pagination={{ clickable: true }}
                    grabCursor={true}
                    loop={true}
                    observer={true}
                    observeParents={true}
                    >
                    {images.map((src, i) => ( //i the index in the array , src is the image which contain the source
                      <SwiperSlide key={i}>
                      <img className="detail-img" src={src} alt={`${tour.name}`} />
                      </SwiperSlide>
                     ))}
                    </Swiper>
                </div>

                <div id='right-side'>
                  <form id='user-infos' onSubmit={confirme}>
                      <div id='details'>
                        <label htmlFor="userName">User Name:</label>
                        <p id='userName'>{userInfos?.name}</p>
                      </div>
                      <div id='details'>
                        <label htmlFor="userEmail">Email:</label>
                        <p id='userName'>{userInfos?.email}</p>
                      </div>
                      <div id='details'>
                        <label htmlFor="userPhone">Phone Number:</label>
                        <p id='userName'>{userInfos?.phoneNumber}</p>
                      </div>
                      <div id='details-members'>
                        <label htmlFor="members">Enter your members's number:</label>
                        <input
                         type="number" 
                         id='members' 
                         ref={membersRef}
                         onChange={handleMembers} 
                         required
                         />
                         {errorMessage && <div className='error-message'>{errorMessage}</div>}
                      </div>

                      <div id='tour-infos'>
                        <p><strong>Chosen tour: </strong>{tour.name}</p>
                        <p><strong>Date: </strong>{tour.date}</p>
                        <p><strong>Price: </strong>{tour.price} per person</p>
                      </div>
                      <button type='submit' id='confirme-btn'>Confirme</button>
                  </form>
                </div>
              </div>
            )}
        </main>    
    )
}

export default ToursDetails