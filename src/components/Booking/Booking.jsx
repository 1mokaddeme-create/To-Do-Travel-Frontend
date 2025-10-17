import React, { useRef, useState } from 'react';
import './Booking.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Booking = ({userInfos}) => {

  const navigate = useNavigate()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const destinationRef = useRef()
  const dateRef = useRef()
  const API_URL = process.env.REACT_APP_API_URL;

  //we use a condition after the declaration of hooks
    if(!userInfos){
      return <Navigate to="/login" replace />
    } 

  const Submitted = async (event)=>{
    event.preventDefault();

   //getting the inputs using useRef hook
    const destination = destinationRef.current.value;
    const date = dateRef.current.value;
   //inputs check
    if(!destination){
      console.log("you need to book a destination", res.data)
      return
    }

    if(!date){
      console.log("date is required", res.data)
      return
    }  

    //get the token
    const token = localStorage.getItem("token")
    //verify if the token exists
    if(!token){
      console.log("No token log in needed")
      navigate("/login")
      return;
    }

    //integration with the back-end to add new booking 
    try {
      const res = await axios.post(`${API_URL}/user/destination/` ,{
        destination: destination,
        date,
      },{
        //sending the token in the headers
        headers: {Authorization: `Bearer ${token}`}
      })

      if(res.status === 201){
        setIsSubmitted(true)
      }

    } catch (error) {
      console.log(error)
    }


  }

  return (
    <main id='booking-page'>
        <h2 id='booking-header'>Booking form</h2>
        { isSubmitted ? (
           <p>Thank you! Your booking request has been submitted</p>
        ) : (
            
        <form className='booking-infos' onSubmit={Submitted}>
            <div id='user-informations'>
              <div className='user-info'>
                <label htmlFor="userName"><strong>User Name:</strong></label>
                <p id='userName'>{userInfos?.name}</p>
              </div>
              <div className='user-info'>
                <label htmlFor="userEmail"><strong>Email:</strong></label>
                <p id='userName'>{userInfos?.email}</p>
              </div>
              <div className='user-info'>
                <label htmlFor="userPhone"><strong>Phone Number:</strong></label>
                <p id='userName'>{userInfos?.phoneNumber}</p>
              </div>
            </div>
            <div id='booking'>
              <label htmlFor="booking-destination">Choose your destination</label>
              <select name="destination" id="booking-destination" ref={destinationRef} required>
                <option value="">Select a destination</option>
                <option value="algiers">Algiers</option>
                <option value="oran">Oran</option>
                <option value="tipaza">Tipaza</option>
                <option value="constantine">Constantine</option>
                <option value="ghardaia">Ghardaia</option>
                <option value="tamanrasset">Tamanrasset</option>
                <option value="timimoune">Timimoune</option>
                <option value="tassili">Tassili n'Ajjer</option>
                <option value="tassili">Blida</option>
                <option value="tassili">Annaba</option>
                <option value="tassili">Dellys</option>
                <option value="tassili">Skikda</option>
                <option value="tassili">Bejaia</option>
                <option value="tassili">Setif</option>
              </select>
            </div>
            <div id='booking'>
              <label htmlFor="date">Enter your date</label>
              <input type="date" name="date" id="date" ref={dateRef} required/>
            </div>

            <div id='submit-btn'>
               <button type="submit" id='confirme-btn'>Confirme</button>
            </div>
        </form>
        )
           
        }
    </main>
  )
}

export default Booking