import Navbar from '../../content/navbar/navbar';
import './Tournaments.css';
import { Link } from 'react-router-dom';



function Tournamets() {
  return (
    <>
    <div>
    <Navbar/>

      <div className='TournamentsIntro'>
        <div className='textintro'>
          <h1>Manage Your <a className='THigh'>Tournaments</a> Here</h1>
          <h4>This is where all your saved tournaments will be stored</h4>
        </div>

      <div className='TContainer'>
        <div className='TListContainer'>
        <Link to='/seedhopper/Seeder'>
          <div className='TNail'>
            <h4 className='TLabel'>Example Tournament</h4>
          <img className='TImage' src={require('./ExampleThumbnail.png')} alt='Tournament Image'/>
          </div>
          </Link>
          
          <Link to='/seedhopper/login'>
          <div className='AddT'>
          <h4 >Log in to get started</h4>
          <div className='AddContainer'>
                <img className='PlusBtn' src={require('./Add.png')} alt='click here to continue'></img>
        </div>
          </div>
          </Link>

      </div>

        
        </div>

      </div>
    </div>
    </>
    );
  }
  
  export default Tournamets;
  