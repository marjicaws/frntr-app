import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Details from "../src/screens/Details/Details.js";
import Home from "../src/screens/Home/Home.js";
import AboutUs from "../../client/src/screens/AboutUs/AboutUs.js";
import Furniture from "../src/screens/Furniture/Furniture.js";
import { verifyUser } from "./services/users.js";
import Login from "../src/screens/Login/Login.js";
import SignIn from "./components/SignIn/SignIn.js";
import SignUp from "./components/SignUp/SignUp.js";
import "./App.css";
import Kitchen from "./screens/Kitchen/Kitchen.js";
import Backyard from "./screens/Backyard/Backyard.js";
import EditProduct from "./screens/EditProduct/EditProduct.js";
import CreateProduct from "./screens/CreateProduct/CreateProduct.js";
import AllProduct from "./screens/AllProducts/AllProduct.js";
import ShoppingCart from "./screens/ShoppingCart/ShoppingCart.js";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
        <Route path="/login" element={<Login />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/backyard" element={<Backyard />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/new" element={<CreateProduct />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
