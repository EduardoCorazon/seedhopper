import { useEffect } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Introduction from './content/Introduction/introduction';
import Navbar from './content/navbar/navbar';




function App() {
  


  return (
    <>
     <div className='App'>
      <Navbar />
      <Introduction/>
      
     </div>
    </>
    
  );
}

export default App;
