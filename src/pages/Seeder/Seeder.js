import Navbar from '../../content/navbar/navbar';
import './Seeder.css';
import Wave from 'react-wavify';

function Seeder() {
  
  return (
    <>
    <div>
      <Navbar/>
      
      <div className='SeederIntro'>
        <div className='textintro'>
          <h3>Here you would upload your list of tournament participants</h3>
          <button>Upload</button>
        </div>
      </div>

      <div className='SeederWave'>
        <Wave fill='#3E0B82' paused={false} options={{amplitude: 91,speed: 0.25,points: 3 }} />
      </div>

      <div className='SeederContainer'>
        <div className='SeederGuide'>
          <h4>The data would be processed and your tournament will appear here</h4>
          <h4>It will automatically be saved into the "Tournaments" section</h4>
          <h4>Below is an example:</h4>
        </div>

        
        <div className='SeederTree'>
          <ul>
            <li className="SeederTree__root">
              <div className='SeederItem'><h4>MercenaryHarpy6</h4></div>
              <ul>
                <li>
                <div className='SeederItem'><h4>PaulArmStrong76</h4></div>
                    <ul>
                        <li><div className='SeederItem'><h4>PossiblePuma89</h4></div></li>
                        <li><div className='SeederItem'><h4>FlapJack76</h4></div></li>
                    </ul>
                  </li>
                <li><div className='SeederItem'><h4>TheOneAchillies</h4></div>
                  <ul>
                        <li><div className='SeederItem'><h4>BillNyeRussianSpy</h4></div></li>
                        <li><div className='SeederItem'><h4>TheMaker47</h4></div></li>
                    </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='SeederFooter'>
          <h2 className='Top'>Top Players</h2>
          <div className='PlayerTop'>
            <ul>1: MercenaryHarpy6 - Score 7804</ul>
            <ul>2: PaulArmStrong76 - Score 6700</ul>
            <ul>3: TheOneAchillies - Score 6589</ul>
          </div>
        </div>

      </div>

    </div>
    </>
    );
  }
  
  export default Seeder;
  