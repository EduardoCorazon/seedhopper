import { useEffect } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './content/navbar/navbar';
import Home from './pages/Home/home';




function App() {
  


  return (
    <>
     <div className='App'>
      <Navbar />
      <Home/>
      
      
     </div>
    </>
    
  );
}

export default App;
