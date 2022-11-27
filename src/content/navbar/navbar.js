import './navbar.css';

import { Link } from "react-router-dom";


function Navbar() {
    return (

            <nav className="navbar">
                <h4 className="logoname">SeedHopper</h4>
                <ul>
                <li><Link to='/seedhopper/'>Home</Link></li>
                <li><Link to="/seedhopper/Tournaments">Tournaments</Link></li>
                <li><Link to='/seedhopper/Seeder'>Seeder</Link></li>
                <li><Link to='/seedhopper/login'>Login</Link></li>
                </ul>
            </nav>
            
    );
  }
  
  export default Navbar;