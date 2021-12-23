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

        </div>
        </nav>
    )
}