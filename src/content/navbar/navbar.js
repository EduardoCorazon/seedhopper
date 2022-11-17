import './navbar.css';

import { Link } from "react-router-dom";


function Navbar() {
    return (

            <nav className="navbar">
                <h4 className="logoname">SeedHopper</h4>
                <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><a href="#">Upload</a></li>
                <li><Link to='/Seeder'>Seeder</Link></li>
                <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
            
    );
  }
  
  export default Navbar;