import React from "react";
import { aboutData } from "../Data";

function About_Short() {
  const { images, experienceHeader, mainHeader, content, emergencyNumber } = aboutData;
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-img-info">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-inner-img">
                    <div className="about-img">
                      <img src={images.about_img1} className="img-fluid" alt="about-image"/>
                    </div>
                    <div className="about-img">
                      <img src={images.about_img2} className="img-fluid" alt="about-image"/>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-inner-img">
                    <div className="about-box">
                      <h4>{experienceHeader}</h4>
                    </div>
                    <div className="about-img">
                      <img src={images.about_img3} className="img-fluid" alt="about-image"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="section-inner-header about-inner-header">
              <h6>{experienceHeader}</h6>
              <h2>{mainHeader}</h2>
            </div>
            <div className="about-content">
              <div className="about-content-details">
                <p className="text-justify">{content}</p>
              </div>
              <div className="about-contact">
                <div className="about-contact-icon">
                  <span><img src={images.phone_icon} alt="phone-image" /></span>
                </div>
                <div className="about-contact-text">
                  <p>Need Emergency?</p>
                  <h4>{emergencyNumber}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Short;
