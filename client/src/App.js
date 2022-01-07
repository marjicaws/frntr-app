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
        <Route path="/products/:id" element={<Details user={user} />} />
        <Route path="/" element={<Home user={user} />} />
        <Route path="/aboutus" element={<AboutUs user={user} />} />
        <Route path="/furniture" element={<Furniture user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/kitchen" element={<Kitchen user={user} />} />
        <Route path="/backyard" element={<Backyard user={user} />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/new" element={<CreateProduct />} />
        <Route path="/products" element={<AllProduct user={user} />} />
        <Route path="/cart" element={<ShoppingCart user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
