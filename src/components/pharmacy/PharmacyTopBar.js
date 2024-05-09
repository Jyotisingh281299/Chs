import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { User } from "react-feather";
import { Link } from "react-router-dom";

export default function PharmacyTopBar() {
    return (
        <>
            <div className="top-header">
                <Container>
                    <Row className="align-items-center">
                        <Col md='6'>
                            <div className="special-offer-content">
                                <p>Special offer! Get -20% off for first order with minimum <span>$200.00</span> in cart.</p>
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className="top-header-right">
                                <ul className="nav">
                                    <li>
                                    <div className="btn log-register">
                                        <a href="" className="me-1">
                                        <span><i className="fa fa-user"></i></span> Sign In
                                        </a> /
                                        <a href="" className="ms-1">Sign Up</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

