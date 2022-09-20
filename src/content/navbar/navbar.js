import './navbar.css';
function Navbar() {
    


    return (
      <div className="navbar">
        <div className="nav">

            <div className="logo">
                <a href="#">LOGO</a>
            </div>
            
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    
      </div>
    );
  }
  
  export default Navbar;