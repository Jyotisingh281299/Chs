import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import PatientDashboard from './pages/patient/Patient';
import DoctorList from './pages/doctorList/DoctorList';
import DoctorProfile from './pages/doctorProfile/DoctorProfile';
import DoctorDashboard from './pages/doctorDashboard/DoctorDashboard';
import Pharmacy from './pages/pharmacy/Pharmacy';
import ProductDesc from './components/pharmacy/ProductDesc';
import Cart from './components/pharmacy/Cart';
import Checkout from './components/pharmacy/Checkout';
import VirtualConsultation from './pages/services/VirtualConsultation';
import DoctorBooking from './pages/BookingDetail/DoctorBooking';
import OrderSuccess from './components/pharmacy/OrderSuccess';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/DoctorList" element={<DoctorList />} />
        <Route path="/DoctorProfile" element={<DoctorProfile />} />
        <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
        <Route path='/pharmacy' element={<Pharmacy/>}/>
        <Route path='/ProductDesc' element={<ProductDesc/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/VirtualConsultation' element={<VirtualConsultation/>}/>
        <Route path='/DoctorBooking' element={<DoctorBooking/>}/>
        <Route path='/OrderSuccess' element={<OrderSuccess/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
