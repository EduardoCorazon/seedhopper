import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Seeder from './pages/Seeder/Seeder';
import { CookiesProvider } from 'react-cookie';
import Register from './pages/login/register';
import Tournamets from './pages/Tournaments/Tournaments';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/Home' element={<App/>} />
      <Route path='/Tournaments' element={<Tournamets/>} />
      <Route path='/Seeder' element={<Seeder/>} />
      <Route path='/Register' element={<Register/>} />
    </Routes>
    </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
