import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './PageComponent/Home.js'
import reportWebVitals from './reportWebVitals';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './PageComponent/About.js';
import Portfolio from './PageComponent/Portfolio.js';
import Contact from './PageComponent/Contact.js';
import Digitizing from './Components/Services/ServicesComponent/Digitizing.js';
import Patches from './Components/Services/ServicesComponent/Patches.js';
import Vector from './Components/Services/ServicesComponent/Vector.js';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/services/digitizing' element={<Digitizing/>}/>
      <Route path='/services/patches' element={<Patches/>}/>
      <Route path='/services/vector' element={<Vector/>}/>

    </Routes>
  </BrowserRouter>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
