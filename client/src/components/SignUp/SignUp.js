import { useState } from "react";
import { signUp } from "../../services/users";
import { useNavigate } from "react-router-dom";
import './SignUp.css'

export default function SignUp({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    try {
      const user = await signUp(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      setForm({
        isError: true,
        errorMsg: "Invalid Email or Password",
        email: "",
        passsword: "",
        username: "",
      });
    }
  };

  const renderError = () => {
    if (form.isError) {
      return <button type="submit">{form.errorMsg}</button>;
    } else {
      return <button type="submit" className="signup_button">Create Account</button>;
    }
  };

  return (
    <div className="signup_container">
      <div className="signup_card">
      <h1 className="signup_title">Create Account</h1>
      <p className="signup_description">Enjoy all the great benefits with your new account!</p>
      <form className='signup_form' onSubmit={onSignUp}>
        <label>Email</label><br />
        <input className="signup_input"
          required
          type="text"
          name="email"
          value={form.email}
          placeholder="Enter Email"
          onChange={handleChange}
        /><br />
        <label>Username</label><br />
        <input className="signup_input"
          required
          type="text"
          name="username"
          value={form.username}
          placeholder="Enter Username"
          onChange={handleChange}
          /><br />
          <label>Password</label><br />
        <input className="signup_input"
          required
          type="password"
          name="password"
          value={form.password}
          placeholder="Enter Password"
          onChange={handleChange}
        /><br />
        {renderError()}
        </form>
      </div>
    </div>
  );
}
