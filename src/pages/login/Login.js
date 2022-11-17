import Navbar from '../../content/navbar/navbar';
import './Login.css';
import { Link } from 'react-router-dom';





function Login() {


  return (
    <>
    <div className='logincontainer'>
    <header>
        <Navbar/>
    </header>
    

    <div class="login-page">
      <div class="form">
          <form class="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
            <p class="message">Not registered? <Link to='/Register'>Create an account</Link></p>
          </form>
        </div>
      </div>
      </div>
    </>
    
  );
}

export default Login;
