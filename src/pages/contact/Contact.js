import React from 'react';
import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import Footer from '../../components/Footer';
import { Mail, MapPin, PhoneCall } from 'react-feather';
import {email_address, phone_no, address} from '../../components/CompanyName';
import { Container, Row, Col } from 'react-bootstrap';
const Contact = () => {

    return (
        <>
        <Header/>
        <Breadcrumb/>
        <section className="contact-section">
            <Container>
                <Row>
                    <Col lg='5' md='12'>
                        <div className="section-inner-header contact-inner-header">
                            <h6>Get in touch</h6>
                            <h2>Have Any Question?</h2>
                        </div>
                        <div className="card contact-card">
                            <div className="card-body">
                                <div className="contact-icon">
                                    <MapPin/>
                                </div>
                                <div className="contact-details">
                                    <h4>Address</h4>
                                    <p>{address}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card contact-card">
                            <div className="card-body">
                                <div className="contact-icon">
                                   <PhoneCall/>
                                </div>
                                <div className="contact-details">
                                    <h4>Phone Number</h4>
                                    <p>{phone_no}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card contact-card">
                            <div className="card-body">
                                <div className="contact-icon">
                               <Mail/>
                                </div>
                                <div className="contact-details">
                                    <h4>Email Address</h4>
                                    <p>{email_address}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='7' md='12' className="d-flex">
                        <div className="card contact-form-card w-100">
                            <div className="card-body">
                                <form>
                                    <Row>
                                        <Col md='6'>
                                            <div className="mb-3">
                                                <label className="mb-2">Name</label>
                                                <input type="text" className="form-control" placeholder="Enter Your Name"/>
                                            </div>
                                        </Col>
                                        <Col md='6'>
                                            <div className="mb-3">
                                                <label className="mb-2">Email Address</label>
                                                <input type="text" className="form-control" placeholder="Enter Email Address"/>
                                            </div>
                                        </Col>
                                        <Col md='6'>
                                            <div className="mb-3">
                                                <label className="mb-2">Phone Number</label>
                                                <input type="text" className="form-control" placeholder="Enter Phone Number"/>
                                            </div>
                                        </Col>
                                        <Col md='6'>
                                            <div className="mb-3">
                                                <label className="mb-2">Services</label>
                                                <input type="text" className="form-control" placeholder="Enter Services"/>
                                            </div>
                                        </Col>
                                        <Col md='12'>
                                            <div className="mb-3">
                                                <label className="mb-2">Message</label>
                                                <textarea className="form-control" placeholder="Enter your comments"></textarea>
                                            </div>
                                        </Col>
                                        <Col md='12'>
                                            <div className="form-group-btn mb-0">
                                                <button type="submit" className="btn btn-primary prime-btn">Send Message</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Footer/>
        </>
    );
};

export default Contact;
