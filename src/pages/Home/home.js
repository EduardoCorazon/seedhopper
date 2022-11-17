import './home.css';
import {useState} from 'react';
import Wave from 'react-wavify';

function Home() {

  return (
    <div className='home'>
        
    <div className='homeintro'>
      
      <div className='wave'>
        <Wave fill='#FFB900' paused={false} options={{amplitude: 61,speed: 0.25,points: 3 }} />
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
