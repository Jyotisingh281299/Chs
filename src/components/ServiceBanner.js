import React from "react";
import Serviceimg_1 from '../assets/img/virtual_call.png';
import Serviceimg_2 from '../assets/img/appointment.png';
import Serviceimg_3 from '../assets/img/lab_test.png';
import Serviceimg_4 from '../assets/img/medical_bag.png';
import Serviceimg_5 from '../assets/img/education.png';
import Serviceimg_6 from '../assets/img/prescription.png';
import service_details_img1 from '../assets/img/virtual_call1.png';
import {ServiceDescriptionData} from '../Data';


export default function ServiceBanner() {
    const serviceBanner1 = {
        background: `url(${Serviceimg_1}) no-repeat`,
        backgroundSize: '100% auto',
      };
      const serviceBanner2 = {
        background: `url(${Serviceimg_2}) no-repeat`,
        backgroundSize: '100% auto',
      };
      const serviceBanner3 = {
        background: `url(${Serviceimg_3}) no-repeat`,
        backgroundSize: '100% auto',
      };
      const serviceBanner4 = {
        background: `url(${Serviceimg_4}) no-repeat`,
        backgroundSize: '100% auto',
      };
      const serviceBanner5 = {
        background: `url(${Serviceimg_5}) no-repeat`,
        backgroundSize: '100% auto',
      };
      const serviceBanner6 = {
        background: `url(${Serviceimg_6}) no-repeat`,
        backgroundSize: '100% auto',
      };
    return (
        <>
        <section className="clinic-features-section">
            <div className="container">
                <div className="service_section pt-0">
                  
                    <div className="carousel">
                        <div id="panel-1" className="panel" style={serviceBanner1}>
                        </div>
                        <div id="panel-2" className="panel" style={serviceBanner2}></div>
                        <div id="panel-3" className="panel" style={serviceBanner3}></div>
                        <div id="panel-4" className="panel" style={serviceBanner4}></div>
                        <div id="panel-5" className="panel" style={serviceBanner5}></div>
                        <div id="panel-6" className="panel" style={serviceBanner6}></div>
                        <div id="panel-7" className="panel" style={serviceBanner1}></div>
                        <div id="panel-8" className="panel" style={serviceBanner2}></div>
                        <div id="panel-9" className="panel" style={serviceBanner3}></div>
                    </div>
                </div>
            </div>
            </section>

            <section className="home-tile-section">
              <div className="container-fluid">
                <div className="row">
                  <div className="m-auto col-md-9">
                  <div class="section-header text-center aos aos-init aos-animate">
                    <h2>Our Services</h2>
                    </div>
                
                  <div className="row">
                  {ServiceDescriptionData.map((item) => (
                  <div className="col-lg-4" key={item.id}>
                    <div className="card">
                      <div className="card-body text-center">
                      <img src={item.service_desc_img1} className="img-fluid"/>
                       <h5>{item.service_heading}</h5>
                       <p>{item.service_desc}</p>
                       <div class="view-all-more text-center">
                        <a type="button" class="btn btn-primary btn btn-primary">View More</a>
                        </div>
                      </div>

                      </div>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    );
}