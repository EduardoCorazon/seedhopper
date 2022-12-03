import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Switch, Route, HashRouter } from 'react-router-dom';
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
      <Route path='/seedhopper' element={<App/>} />
      <Route path='/seedhopper/login' element={<Login/>} />
      <Route path='/seedhopper/Home' element={<App/>} />
      <Route path='/seedhopper/Tournaments' element={<Tournamets/>} />
      <Route path='/seedhopper/Seeder' element={<Seeder/>} />
      <Route path='/seedhopper/Register' element={<Register/>} />
    </Routes>
    </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
