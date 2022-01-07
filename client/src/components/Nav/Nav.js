import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="home-logo">
          <Link to="/">
            <img
              className="nav-img-link"
              src="https://res.cloudinary.com/marssantos/image/upload/v1641500471/Frntr_ifkhwz.png"
            />
          </Link>
        </div>
        <div className="centered-links">
        <div className="links">
          <Link to="/products">
            <p className="nav-links">Products</p>
          </Link>
          <Link to="/furniture">
            <p className="nav-links">Furniture</p>
          </Link>
          <Link to="/kitchen">
            <p className="nav-links">Kitchen/Dining</p>
          </Link>
          <Link to="/backyard">
            <p className="nav-links">Backyard</p>
          </Link>
          <Link to="/aboutus">
            <p className="nav-links">About us</p>
          </Link>
          <Link to="/new">
            <p className="nav-links">Submit New Product</p>
          </Link>
        </div>
        <div className="login-container">
          <Link to="/login">
            <p className="nav-links">Sign In/Sign Out</p>
          </Link>
          <Link to="/cart">
            <img
              className="cart"
              src="https://i.imgur.com/DMlqxwl.png"
              alt="cart"
            />
          </Link>
        </div>
      </div>
      </div>
    </nav>
  );
}
