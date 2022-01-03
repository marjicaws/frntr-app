import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="home-link">
          <Link to="/">
            <img src="" alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link to="/furniture"><p>Furniture</p></Link>
          <Link to="/kitchen"><p>Kitchen/Dining</p></Link>
          <Link to="/backyard"><p>Backyard</p></Link>
          <Link to="/aboutus"><p>About us</p></Link>
          <Link to="/new"><p>Submit New Product</p></Link>
        </div>
        <div className="login-container">
          <Link to="/login"><p>Sign In/Sign Out</p></Link>
        </div>
      </div>
    </nav>
  );
}
