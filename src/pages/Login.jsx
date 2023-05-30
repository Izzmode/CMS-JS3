import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className='login-wrapper'>
    <div className='login-card'>
      <p className='login-headline'>Please Login to your account</p>
      <LoginForm />
    </div>
    </div>
  )
}

export default Login