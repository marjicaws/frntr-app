import React, { useState } from 'react'
import './Login.css'
import Layout from "../../components/Layout/Layout";
import SignIn from '../../components/SignIn/SignIn.js'
import SignUp from '../../components/SignUp/SignUp.js'


function Login() {

  const [login, setLogin] = useState(true)

  const handleSignIn = () => {
    setLogin(true)
  }

  const handleCreate = () => {
    setLogin(false)
  }

  return (
    <Layout>
    <div>
        <button className="signin_toggle"
          onClick={handleSignIn}>Sign In</button>
        <button className="signup_toggle"
          onClick={handleCreate}>Create Account</button>
        {
          login ? <SignIn /> : <SignUp />
        }
    </div>
    </Layout>
  )
}

export default Login
