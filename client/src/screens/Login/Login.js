import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../../components/SignUp/SignUp.js'
import SignUp from '../../components/SignUp/SignUp.js'




function Login() {
  return (
    <div>
      <Link to='signin'>Sign In</Link>
      <Link to='signup'>Create Account</Link>
    </div>
  )
}

export default Login
