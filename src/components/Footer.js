import React from "react";
import ChsLogo from '../assets/img/chs_logo.png';
import getCompanyName from "./CompanyName";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                                                <Link to="javascript:void(0);"><i className="fab fa-facebook-f"></i> </Link>
                                            </li>
                                            <li>
                                            <Link to="javascript:void(0);"><i className="fab fa-twitter"></i> </Link>
                                            </li>
                                            <li>
                                            <Link to="javascript:void(0);"><i className="fab fa-linkedin-in"></i></Link>
                                            </li>
                                            <li>
                                            <Link to="javascript:void(0);"><i className="fab fa-instagram"></i></Link>
                                            </li>
                                            <li>
                                            <Link to="javascript:void(0);"><i className="fab fa-dribbble"></i> </Link>
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
                                    <li><Link to="javascript:void(0);">Home</Link></li>
                                    <li><Link to="javascript:void(0);">About Us</Link></li>
                                    <li><Link to="javascript:void(0);">Register</Link></li>
                                    <li><Link to="javascript:void(0);">Contact Us</Link></li>
                                    <li><Link to="javascript:void(0);">Patient Dashboard</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg='3' md='6' xs='6'>
                            <div className="footer-widget footer-menu">
                                <h2 className="footer-title">For Doctors</h2>
                                <ul>
                                    <li><Link to="javascript:void(0);">Appointments</Link></li>
                                    <li><Link to="javascript:void(0);">Chat</Link></li>
                                    <li><Link to="javascript:void(0);">Login</Link></li>
                                    <li><Link to="javascript:void(0);">Register</Link></li>
                                    <li><Link to="javascript:void(0);">Doctor Dashboard</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg='3' md='6'>
                            <div className="footer-widget footer-contact">
                                <h2 className="footer-title">Contact Us</h2>
                                <div className="footer-contact-info">
                                    <div className="footer-address">
                                        <span><i className="fas fa-map-marker-alt"></i></span>
                                        <p> 65, Gaytri puram, Kursi Road, Lucknow- 226022 </p>
                                    </div>
                                    <p>
                                        <i className="fas fa-phone-alt"></i>
                                        +91 7060977139
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
                                     Designed by <Link to="https://softtrixsoftware.com/" target="_blank" className="text-white">Softtrix Software Pvt. Ltd.</Link>
                                    </p>
                                </div>
                            </Col>
                            <Col sm='4' md='4'>
                                <div className="copyright-menu">
                                    <ul className="policy-menu">
                                        <li><Link to="#">Terms and Conditions</Link></li>
                                        <li><Link to="#">Policy</Link></li>
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