import React, { useRef, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = ({setIsloggedin}) => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const [generalError, setGeneralError] = useState('')
    const API_URL = process.env.REACT_APP_API_URL;
    
    console.log("before handling errors")
    const handleErrors = () => {
       setGeneralError('')
    }
    
    console.log("login")
    const login = async (event)=>{
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
      

        try {
            
            const res = await axios.post(`${API_URL}/login`,{
                email,
                password
            })
    
            console.log('after')
            if(res.status === 200){
                localStorage.setItem("token", res.data.token)

                setIsloggedin(true);
                navigate("/")

            }

        } catch (error) {
            console.log(error)
            if(error.response){
                setGeneralError(error.response.data.message)
            }
        }

    }

  return (
     <main >
            <section className='login-page'>
                <div id='left'>
                    <div id='content'>
                        <h1 className='content-header'>Welcome Back!</h1>
                        <p id='welcoming'>Log in and book your trip now , Let's have fun together exploring Algeria's wonders.</p>
                        <div className="hero-features">
                          <div className="feature">✓ Best Price Guarantee</div>
                          <div className="feature">✓ 24/7 Customer Support</div>
                          <div className="feature">✓ Secure Booking</div>
                        </div>
                    </div>
                </div>
                <div id='right'>
                  <form id='login-form' onSubmit={login}>
                    <h2>Log In to Your Account</h2>

                     <div id='login'>
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id='email' placeholder='Enter your email address' ref={emailRef} onChange={handleErrors} required/>
                    </div>
                    <div id='login'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id='password' placeholder='Enter your password' ref={passwordRef} onChange={handleErrors} required/>
                    </div>

                    <div id='forgot-container'>
                        <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                    </div>

                   <button type='submit' id='login-btn'>Log in</button>
                   {generalError &&  <div className='error-message'>{generalError}</div>}

                   <div className="register-link">
                        <p>Don't have an account? </p>
                        <Link to="/register" id='register'>Register now</Link>
                    </div>
                  </form>
                </div>
            </section>
     </main>
  )
}

export default Login