import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { DoBanner } from '../../src/Data';
import { Col, Container, Row } from "react-bootstrap";

export default function DocBanner() {
    const responsiveFeatures = {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },

    };
    return (
        <>
            <section className="clinic-features-section">
                <Container>
                    {/* <Row>
                        <Col md='6'>
                            <div className="section-heading">
                                <h2>Availabe Features in Our Clinic</h2>
                                <p>Meet our Experts & Book Online</p>
                            </div>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col lg='12'>
                            <OwlCarousel className='owl-theme' loop margin={10} nav dots={false} responsive={responsiveFeatures}>
                                {DoBanner.map((item) => (
                                    <div className="item" key={item.id}>
                                        <div className="clinic-features">
                                            <div className="item" key={item.id}>
                                                <img src={item.do_img} alt={item.name} className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}