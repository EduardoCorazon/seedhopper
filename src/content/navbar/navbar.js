import './navbar.css';
function Navbar() {
    return (
      <div className="navbar">
        <div className="container">
        <div className="item">
          SeedHopper
        </div>
      <ul className="nav item">
        <li><a href="#">Home</a></li>
        <li><a href="#">Upload</a></li>
        <li><a href="#">Tree Map</a></li>
        <li><a href="#">Guide</a></li>
      </ul>
    </div>
      
    </div>
    );
  }
  
  export default Navbar;