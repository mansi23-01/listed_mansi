import React from 'react'

function ForgotPassword() {
  return (
    <div>
        <div className='forgot'>
        <h1>BOARD.</h1>
        <h4>Enter the email address associated with your account and we'll send you a link to reset your password.</h4>
        <h4>Email address</h4>
        <input type="email"  placeholder='Enter your Email'/>
        <div>
        <button>Continue</button>
        </div>
        </div>
      
    </div>
  )
}

export default ForgotPassword
