import React, { useState } from "react";
import "./Login.css";
import Layout from "../../components/Layout/Layout";
import SignIn from "../../components/SignIn/SignIn.js";
import SignUp from "../../components/SignUp/SignUp.js";

function Login({ setUser }) {
  const [login, setLogin] = useState(true);

  const handleSignIn = () => {
    setLogin(true);
  };

  const handleCreate = () => {
    setLogin(false);
  };

  return (
    <Layout>
      <div>
      <div className="sign-In-Out-Toggle">
        <button className="signin_toggle" onClick={handleSignIn}>
          Sign In
        </button>
        <button className="signup_toggle" onClick={handleCreate}>
          Create Account
        </button>
        </div>
        {login ? <SignIn setUser={setUser} /> : <SignUp setUser={setUser} />}
      </div>
    </Layout>
  );
}

export default Login;
