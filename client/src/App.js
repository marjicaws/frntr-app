import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Details from "../src/screens/Details/Details.js";
import Home from "../src/screens/Home/Home.js";
import AboutUs from "../../client/src/screens/AboutUs/AboutUs.js";
import Furniture from "../src/screens/Furniture/Furniture.js";
import verifyUser from "./services/users.js";
import SignIn from "./components/SignIn/SignIn.js";
import SignUp from "./components/SignUp/SignUp.js";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  userEffect(() => {
    const grabUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    grabUser();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/products/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/signin" element={<SignUp setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
