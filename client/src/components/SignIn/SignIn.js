import { useState } from "react";
import { signIn } from "../../services/users";
import { useNavigate } from "react-router-dom";

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
      return <button type="submit">Sign In </button>;
    }
  };

  return (
    <div>
      <form onSubmit={onSignIn}>
        <label>Email</label>
        <input
          required
          type="text"
          name="email"
          value={form.email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          value={form.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  );
}
