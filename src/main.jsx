import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './Components/navBar_Container.jsx';

import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Login from './Components/Login.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
   
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);




