import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import PatientDashboard from './pages/patient/Patient';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/patient" element={<PatientDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
