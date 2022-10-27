import './navbar.css';

import { Link } from "react-router-dom";

function Navbar() {
    return (
            <nav className="navbar">
                <h4 className="logoname">SeedHopper</h4>
                <ul>
                <li><Link to='/introduction'>Introduction</Link></li>
                <li><a href="#">Upload</a></li>
                <li><a href="#">Tree Mapper</a></li>
                <li><a href='#'>Help</a></li>
                </ul>
            </nav>
    );
  }
  
  export default Navbar;