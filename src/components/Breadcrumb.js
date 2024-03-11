import React from "react";
import { Col, Container, Nav, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Breadcrumb()
{
    return(
        <div className="breadcrumb-bar-two">
        <Container>
            <Row className="align-items-center inner-banner">
                <Col md='12' xs='12' className="text-center">
                    <h2 className="breadcrumb-title"></h2>
                    <Nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item" aria-current="page"></li>
                        </ol>
                    </Nav>
                </Col>
            </Row>
        </Container>
    </div>
    );
}