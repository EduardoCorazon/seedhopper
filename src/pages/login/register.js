import Navbar from '../../content/navbar/navbar';
import './Login.css';
import {useCookies} from "react-cookie";
import { Link } from 'react-router-dom';
import { useState } from 'react';





function Register() {

  //For cookies
  const [cookies, setCookie] = useCookies(["user"]);
  function handleCookie() {
    setCookie("name", name, { path: "/"});

  }


  //For user credentials
  const [name, setName] = useState('');

  return (
    <>
    <header>
        <Navbar/>
    </header>
    <h1>testing cookies</h1>{cookies.name && <p>{cookies.name}</p>}
    <div class="login-page">
      <div class="form">
         <form class="register-form">
          
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="email address" />
            <input type="password" placeholder="password" />
            <button onClick={handleCookie}>create</button>
            <p class="message">Already registered? <Link to='/login'>Sign In</Link></p>
          </form>
          
        </div>
      </div>
    </>
    
  );
}

export default Register;
