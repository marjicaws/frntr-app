import { useState } from "react";
import { signIn } from "../../services/users";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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

  const onSignIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      setForm({
        isError: true,
        errorMsg: "Invalid Email or Password",
        email: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    if (form.isError) {
      return <button type="submit">{form.errorMsg}</button>;
    } else {
      return (
        <button className="signin_button" type="submit">
          Sign In{" "}
        </button>
      );
    }
  };

  return (
    <div className="signin_container">
      <div className="signin_card">
        <h1 className="signin_title">Account</h1>
        <p className="signin_description">
          Sign in to check order status, update billing information, or review
          past orders.
        </p>
        <form className="signin_form" onSubmit={(e) => onSignIn(e)}>
          <label>Email</label>
          <br />
          <input
            className="signin_input"
            required
            type="text"
            name="email"
            value={form.email}
            placeholder="Enter Email"
            onChange={handleChange}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="signin_input"
            required
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <br />
          {renderError()}
        </form>
      </div>
    </div>
  );
}
