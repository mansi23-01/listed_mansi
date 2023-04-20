import React from 'react'
import { Link } from 'react-router-dom'

function CreateAccount() {
  return (
    <div>
      <div className='Right'>
        <h1>Create Account</h1>
        <div className='box'>
        <h4>Name</h4>
        <input type="text"  placeholder='Enter your Name'/>
        <h4>Email address</h4>
        <input type="email"  placeholder='Enter your Email'/>
        <h4>Password</h4>
        <input type="password"/>
        <Link to="/">
        <button>Create Account</button>
        </Link>
        </div>           
      </div>
    </div>
  )
}

export default CreateAccount

