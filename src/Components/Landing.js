import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'

function Landing() {
  return (
   <>
     <div className='main'>

      <div className='Left'>
        <h1>Board.</h1>
      </div>

      <div className='Right'>
        <h1>Sign In</h1>
        <h3>Sign in to your account</h3>
        <div className='btn'>
          <button><FcGoogle/>Sign in with Google</button>
        <button><BsApple/>Sign in with Apple</button>
        </div>

        <div className='box'>
        <h4>Email address</h4>
        <input type="email"  placeholder='Enter your Email' required/>
        <h4>Password</h4>
        <input type="password"/>
        <Link to="/forgotpassword">
        <p> <span> Forgot password?</span></p>
        </Link>
        <Link to ="/mainpage">
        <button>Sign in</button>
        </Link>
        </div>
        
        <p>Don't have an account? <Link to="/createaccount"> <span>Register here</span></Link> </p>           
      </div>
      </div>
    
    </>
   
  )
}

export default Landing

