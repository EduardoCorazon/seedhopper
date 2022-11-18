import './home.css';
import {useState} from 'react';
import './introduction.css';
import Wave from 'react-wavify';

function Home() {
  let show = 'introcontainer';
    const [isActive, setIsActive] = useState(false);

  const rmintro = () => {
    setIsActive(current => !current);
    
  };



  return (
    <div className='home'>
      

        
    <div className='homeintro'>
    <div style={{display: isActive ? 'none': ''}}>
    <div className='introcontainer'>
    
        <div className='textintro'>
            <h1>Welcome to SeedHopper</h1>
            <h4>The best App to optimize your tournaments</h4>
        </div>
        <div className='contbtncontainer'>
            <div className='acceptbtn' onClick={rmintro}>
                <img src={require('./check.png')} alt='click here to continue' className='check'></img>
            </div>
        </div>
    </div>
    </div>

      <div className='homenote' style={{display: isActive ? '': 'none'}}>
        <h2>Organize your tournament Today</h2>
        
        <p>Please note that this product is still in development</p>
      </div>
      
      <div className='wave'>
        <Wave fill='#FFB900' paused={false} options={{amplitude: 91,speed: 0.25,points: 3 }} />
      </div>
    </div>


      


      <div className='howitworks'>
        <h2>How it works</h2>
        <p>This is cool </p>
      </div>

        




    </div>
    
  );
}

export default Home;
