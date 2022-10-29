import './introduction.css';
import {useState} from 'react';

function Introduction() {
    let show = 'introcontainer';
    const [isActive, setIsActive] = useState(false);

  const rmintro = () => {
    // 👇️ toggle
    setIsActive(current => !current);
  };
    

  return (
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
  );
}

export default Introduction;
