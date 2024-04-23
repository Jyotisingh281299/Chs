import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PharmacyBanner} from "../../Data";
import PopularCategory from "../../components/PopularCategory";
import {PharmacyProduct} from "../../Data";
import { ShoppingBag} from 'react-feather';
import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function Pharmacy() {
    const heading = 'Pharmacy';
    return (
        <>
         <Header/>
           <Breadcrumb/>
            <section className="section welcome-section">
                <Container>
                    <Row className="justify-content-center">
                        {PharmacyBanner.map((item, index) =>
                        (
                            <Col lg='4' md='6' className="d-flex" key={index}>
                                <div className="shop-card suppliment-card">
                                    <Row className="align-items-center">
                                        <Col md='7'>
                                            <div className="shop-content">
                                                <h5>{item.heading} <span>Suppliments</span></h5>
                                                <p>{item.content}</p>
                                                <Link to="/" class="btn">{item.button_text}</Link>
                                            </div>
                                        </Col>
                                        <Col md='5'>
                                            <div className="shop-img">
                                                <img src={item.img} alt={item.heading} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        )
                        )}
                    </Row>
                </Container>
            </section>
            <PopularCategory />

            <section className="section products-sec">
                <Container>
                    <div className="pharmacy-section-header">
                        <Row className="align-items-center">
                            <Col md='6'>
                                <div className="pharmacy-title">
                                    <h4>Featured Products</h4>
                                </div>
                            </Col>
                            <Col md='6'>
                                <div className="pharmacy-title-link">
                                    <Link to="#">See All <i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                           </Col>
                        </Row>
                    </div>
                    <Row className="justify-content-center">
                        {PharmacyProduct.map((item, index)=>
                        (
                        <Col lg='3' md='4' key={index}>
                            <div className="products-card">
                                <div className="product-card-img">
                                <Link to="#"><img src={item.img} alt={item.product_name}/></Link>
                                </div>
                                <div className="product-content">
                                    <h6>{item.product_cat}</h6>
                                    <h4><Link to="#">{item.product_name}</Link></h4>
                                    <span className="badge">{item.quantity}</span>
                                    <div className="product-cart">
                                        <div className="cart-price">
                                            <h5>{item.price}<span>{item.discount_price}</span></h5>
                                        </div>
                                        <Link to="#" className="cart-icon">
                                        <ShoppingBag />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                         )
                         )}
                    </Row>
                </Container>
            </section>
            <Footer/>
        </>
    );
}