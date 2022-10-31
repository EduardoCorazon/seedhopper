import Navbar from '../../content/navbar/navbar';
import './Login.css';
import {useCookies} from "react-cookie";
import { Link } from 'react-router-dom';





function Register() {

  //For cookies
  const [cookies, setCookie] = useCookies(["user"]);
  function handleCookie() {
    setCookie("user", "testaccount", { path: "/"});
  }

  return (
    <>
    <header>
        <Navbar/>
    </header>
    <h1>testing cookies</h1>{cookies.user && <p>{cookies.user}</p>}
    <div class="login-page">
      <div class="form">
         <form class="register-form">
          
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p class="message">Already registered? <Link to='/login'>Sign In</Link></p>
          </form>
          
        </div>
      </div>
    </>
    
  );
}

export default Register;
