import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { company_name } from "../../components/CompanyName";

export default function VirtualConsultation() {
    return (
        <>
            <Header />
            <Breadcrumb />
            <section class="about-section">
               <Container>
                    <Row class="align-items-center">
                        <Col lg='6' md='12'>
                            <div class="about-img-info">
                            <img src="assets/img/about-img2.jpg" class="img-fluid" alt="about-image"/>
                            </div>
                        </Col>
                        <Col lg='6' md='12'>
                            <div class="section-inner-header about-inner-header">
                                <h6>{company_name}</h6>
                                <h3 className="fw-bold">Video Connectivity</h3>
                            </div>
                            <div class="about-content">
                                <div class="about-content-details text-justify">
                                    <p>Video connectivity in hospitals typically involves the use of telemedicine or telehealth technologies to connect patients with doctors remotely. This connectivity enables healthcare providers to conduct virtual consultations, diagnose conditions, monitor patients, and provide medical advice without the need for in-person visits.</p>
                                    <p>To reach patients in different locations or those unable to visit a healthcare facility, hospitals may deploy video connectivity solutions that support mobile devices or remote access from home.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            <Footer />
        </>
    );
}