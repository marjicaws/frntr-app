import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <nav>
        <div>
<Link to="/" ><img src="" alt="logo"/></Link>
<Link to="/furniture">Furniture</Link>
<Link to="/kitchen">Kitchen/Dining</Link>
<Link to="/backyard">Backyard</Link>
<Link to="/aboutus">About us</Link>
<Link to="/signin">Sign In/Sign Out</Link>
<Link to="/new">Submit New Product</Link>

        </div>
        </nav>
    )
}