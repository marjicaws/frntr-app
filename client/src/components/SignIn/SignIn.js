import { useState } from "react";
import { signIn } from "../../services/users";
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
  const navigate = useNavigate();

  const [form, setForm] =
    useState[
      {
        email: "",
        password: "",
        isError: false,
        errorMsg: "",
      }
    ];

  const handleChange = (e) => {};
  return <div></div>;
}
