import React, { useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import './Register.css'

const Register = ({ setIsloggedin}) => {

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const passwordRef = useRef()
    const wilayaRef = useRef()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    const handleErrors = () => {
        setErrorMessage('')
    }

    const register = async (event) => {
        event.preventDefault()

        const name = nameRef.current.value
        const email = emailRef.current.value
        const phoneNumber = phoneRef.current.value
        const password = passwordRef.current.value
        const wilaya = wilayaRef.current.value

        try {
            const res = await axios.post("http://localhost:4000/register", {
                name,
                email,
                password,
                phoneNumber,
                wilaya
            })


            if(res.status === 200){
                localStorage.setItem("token", res.data.token)
                setIsloggedin(true)
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            if(error.response){
                setErrorMessage(error.response.data.message)
            }
        }
    }

    return (
        <main>
                <div id='register-page'>
                    <div id='left'>
                      <h1>Wlecome to To-DO Travel</h1>
                    </div>
                    <div id='register-form-container'>
                     <div id='register-form'>
                        <h2>Create Your Account</h2>
                        <form onSubmit={register}>

                            <div className='register-info'>
                                <input type="text" id='name' placeholder='Enter your name...' ref={nameRef} required />
                            </div>
                            <div className='register-info'>
                                <input type="email" id='email' placeholder='Enter your email...' ref={emailRef} required />
                            </div>
                            <div className='register-info'>
                                <input type="tel" id='phone' placeholder='Enter your phone number...' ref={phoneRef} required />
                            </div>
                            <div className='register-info'>
                                <input type="password" id='password' placeholder='Enter your password' ref={passwordRef} required />
                            </div>
                            <div className='register-info'>
                                <input type="text" id='wilaya' placeholder='Enter your wilaya' ref={wilayaRef} required />
                            </div>

                            <button type='submit' id='register-btn' onChange={handleErrors}>Register</button>
                            {errorMessage && <div className='error-message'>{errorMessage}</div>}

                            <div className="login-link">
                                <p>Already have an account? </p>
                                <Link to="/login" id='login-link'>Log in now</Link>
                            </div>
                            
                        </form>
                     </div>
                    </div>
                </div>
        </main>
    )
}

export default Register