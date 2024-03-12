import React from "react";
import ChsLogo from '../assets/img/chs_logo.png';
import getCompanyName from "./CompanyName";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer()
{
    const companyName = getCompanyName();
    return (
        <footer className="footer">
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col lg='3' md='6'>
                            <div className="footer-widget footer-about">
                                <div className="footer-logo">
                                    <img src={ChsLogo} alt="logo"/>
                                </div>
                                <div className="footer-about-content">
                                    <div className="social-icon">
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0);"><i className="fab fa-facebook-f"></i> </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);"><i className="fab fa-twitter"></i> </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);"><i className="fab fa-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);"><i className="fab fa-dribbble"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' md='6' xs='6'>
                            <div className="footer-widget footer-menu">
                                <h2 className="footer-title">About Us</h2>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Register</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Patient Dashboard</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg='3' md='6' xs='6'>
                            <div className="footer-widget footer-menu">
                                <h2 className="footer-title">For Doctors</h2>
                                <ul>
                                    <li><a href="#">Appointments</a></li>
                                    <li><a href="#">Chat</a></li>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Register</a></li>
                                    <li><a href="#">Doctor Dashboard</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg='3' md='6'>
                            <div className="footer-widget footer-contact">
                                <h2 className="footer-title">Contact Us</h2>
                                <div className="footer-contact-info">
                                    <div className="footer-address">
                                        <span><i className="fas fa-map-marker-alt"></i></span>
                                        <p> Gomti Nagar, Lucknow </p>
                                    </div>
                                    <p>
                                        <i className="fas fa-phone-alt"></i>
                                        +91 987653210
                                    </p>
                                    <p className="mb-0">
                                        <i className="fas fa-envelope"></i>
                                        caresmart@gmail.com
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


            <div className="footer-bottom">
                <Container>
                    <div className="copyright">
                        <Row>
                            <Col sm='8' md='8'>
                                <div className="copyright-text">
                                    <p className="mb-0">© 2024 {companyName}. All rights reserved.
                                     Designed by <a href="https://softtrixsoftware.com/" target="_blank" className="text-white">Softtrix Software Pvt. Ltd.</a>
                                    </p>
                                </div>
                            </Col>
                            <Col sm='4' md='4'>
                                <div className="copyright-menu">
                                    <ul className="policy-menu">
                                        <li><a href="#">Terms and Conditions</a></li>
                                        <li><a href="#">Policy</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </footer>
    );
}