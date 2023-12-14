import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Details/:id" element={<Details/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);