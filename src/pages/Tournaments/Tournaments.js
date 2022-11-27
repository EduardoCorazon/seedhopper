import Navbar from '../../content/navbar/navbar';
import './Tournaments.css';



function Tournamets() {
  return (
    <>
    <div>
    <Navbar/>

      <div className='TournamentsIntro'>
        <div className='textintro'>
          <h1>Manage Your Tournaments Here</h1>
          <h4>This is where all your saved tournaments will be stored</h4>
        </div>

      <div className='TContainer'>
        <div className='TListContainer'>
          <div className='TNail'>
            <h4>Example Tournament</h4>
          <img className='TImage' src={require('./ExampleThumbnail.png')} alt='Tournament Image'/>
          </div>

      </div>

        <div className='TWarning'>
        <div className='textintro'>
          <h3 className='TLogin'>To get started making your own Tournament please log in! </h3>
        </div>

        </div>
        </div>

      </div>
    </div>
    </>
    );
  }
  
  export default Tournamets;
  