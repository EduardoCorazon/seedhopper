import { useEffect, useState } from 'react';
import { Router, Routes, Route, json } from 'react-router-dom';
import './App.css';
import Navbar from './content/navbar/navbar';
import Home from './pages/Home/home';




function App() {
  //GET localhost:3000/challonge Body:{}
  
  const [message, setMessage] = useState("");
  useEffect(()=>{
    fetch("http://localhost:3001/challonge")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);



  
  return (
    <>
     <div className='App'>
      <Navbar />
      <h1>{message}</h1>
      <Home/>
      
      
     </div>
    </>
    
  );
}

export default App;
