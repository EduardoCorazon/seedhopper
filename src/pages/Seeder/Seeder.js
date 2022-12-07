import Navbar from '../../content/navbar/navbar';
import './Seeder.css';
import Wave from 'react-wavify';
import axios from 'axios';
import { useState } from 'react';

function Seeder() {
  //users for tournament 3474131
  const usernames=["Jolteo","GhostCoffee45","UKJoey","Scruffy90","ROCKMANX2","xwarrior1209","Golyhawhaw"];
  const [isActive, setIsActive] = useState(false);

  
    

  //For API-Key input
  const [ApiKey, setApiKey] = useState('');
  

  const handleInput = () =>{
    console.log("Api Key: "+ApiKey)
    //send the api key
    axios.post('http://localhost:3001/challonge/players', {
      "api_key": ApiKey,
      "tournament_id":3474131,
    })
    .then((response) => {
      console.log(response.data)
      console.log("Type of response: "+ typeof response.data); // string      
      alert("Your response has been Submitted")
        setIsActive(current => !current);
    }, (error) => {
      alert("POSTfailure")
    })


  };



  return (
    <>
    <div>
      <Navbar/>
      
      
      <div className='SeederIntro'>
        <div className='textintro'>
          <h3>Here you would upload your list of tournament participants</h3>
          <button className='UploadBtn' onClick={handleInput}>Upload</button>
          <input onChange={e=>setApiKey(e.target.value)} placeholder='Input you api key here...' type="text" name/>
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

        
        <div className='SeederTree' style={{display: isActive ? '': 'none'}}>
          <ul>
            <li className="SeederTree__root">
              <div className='SeederItem'><h4>{usernames[0]}</h4></div>
              <ul>
                <li>
                <div className='SeederItem'><h4>{usernames[1]}</h4></div>
                    <ul>
                        <li><div className='SeederItem'><h4>{usernames[3]}</h4></div></li>
                        <li><div className='SeederItem'><h4>{usernames[4]}</h4></div></li>
                    </ul>
                  </li>
                <li><div className='SeederItem'><h4>{usernames[2]}</h4></div>
                  <ul>
                        <li><div className='SeederItem'><h4>{usernames[5]}</h4></div></li>
                        <li><div className='SeederItem'><h4>{usernames[6]}</h4></div></li>
                    </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='SeederFooter'>
          <div style={{display: isActive ? '': 'none'}}>
          <h2 className='Top'>Top Players</h2>
          <div className='PlayerTop'>
            <ul>1: {usernames[0]} - id 55404641</ul>
            <ul>2: {usernames[1]} - id 55404701</ul>
            <ul>3: {usernames[2]} - id 55404795</ul>
          </div>
          </div>
        </div>

      </div>

    </div>
    </>
    );
  }
  
  export default Seeder;
  