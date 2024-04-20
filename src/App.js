import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Pharmacy from './pages/pharmacy/Pharmacy';
import About from './pages/about/About';


function App() {
  return (
    <>
  
      <div className='main-wrapper'>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/pharmacy" element={<Pharmacy />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            
          </Routes>
      </div>
    </>
  );
}

export default App;
