import React, { useState } from 'react';
import backgroundImage from '../assets/img/search-bg.png';
import { Container } from 'react-bootstrap';

const styles = {
    background: `#ffffff url(${backgroundImage}) no-repeat bottom center`,
    backgroundSize: '100% auto',
  };
  
const Banner = () => {
  const [location, setLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="section section-search" style={styles}>
      <Container fluid>
        <div className="banner-wrapper">
        <div class="banner-header text-center aos aos-init aos-animate" data-aos="fade-up">
            <h1>Search Doctor, Make an Appointment</h1>
            <p>Discover the best doctors, clinic &amp; hospital the city nearest to you.</p>
            </div>
            <div className="search-box">
            <form action="#">
            <div className="mb-3 search-location aos aos-init aos-animate" data-aos="fade-up">
            <input type="text" className="form-control" placeholder="Search Location"/>
            <span className="form-text">Based on your Location</span>
            </div>
            <div className="mb-3 search-info aos aos-init aos-animate" data-aos="fade-up">
            <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"/>
            <span className="form-text">Ex : Dental or Sugar Check up etc</span>
            </div>
            <button type="submit" className="btn btn-primary search-btn mt-0 aos aos-init aos-animate" data-aos="fade-up"><i className="fas fa-search"></i> <span>Search</span></button>
            </form>
            </div>
          {/* ... existing code ... */}
          {/* <form onSubmit={handleSubmit}>
            <div className="mb-3 search-location aos aos-init aos-animate" data-aos="fade-up">
              <input
                type="text"
                className="form-control"
                placeholder="Search Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <span className="form-text">Based on your Location</span>
            </div>
            <div className="mb-3 search-info aos aos-init aos-animate" data-aos="fade-up">
              <input
                type="text"
                className="form-control"
                placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="form-text">Ex : Dental or Sugar Check up etc</span>
            </div>
            <button
              type="submit"
              className="btn btn-primary search-btn mt-0 aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <i className="fas fa-search"></i> <span>Search</span>
            </button>
          </form> */}
        </div>
      </Container>
    </section>
  );
};

export default Banner;
