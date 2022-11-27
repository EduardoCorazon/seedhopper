import Navbar from '../../content/navbar/navbar';
import './Login.css';
import {useCookies} from "react-cookie";
import { Link } from 'react-router-dom';
import { useState } from 'react';





function Register() {

  //For cookies
  //<h1>testing cookies</h1>{cookies.name && <p>{cookies.name}</p>}
  const [cookies, setCookie] = useCookies(["user"]);
  function handleCookie() {
    setCookie("name", name, { path: "/"});
    alert("This functionality is still in development")
  }


  //For user credentials
  const [name, setName] = useState('');

  return (
    <>
    <div className='logincontainer'>
    <header>
        <Navbar/>
    </header>
  
    <div class="login-page">
      <div class="form">
         <form class="register-form">
          
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="email address" />
            <input type="password" placeholder="password" />
            <button onClick={handleCookie}>create</button>
            <p class="message">Already registered? <Link to='/seedhopper/login'>Sign In</Link></p>
            <p class='indev'> This functionality is still in development</p>
          </form>
          
        </div>
      </div>
      </div>
    </>
    
  );
}

export default Register;
