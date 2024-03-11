import React from "react";
import {cardData} from "../Data";
import { Col, Container, Row } from "react-bootstrap";



const Category = () => {
  return (
    <section className="section home-tile-section">
      <Container fluid>
        <Row>
          <Col md='9' className="m-auto">
            <div
              className="section-header text-center aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <h2>What are you looking for?</h2>
            </div>
            <Row>
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="col-lg-4 mb-3 aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="card text-center doctor-book-card">
                    <img
                      src={card.imageSrc}
                      alt={card.alt}
                      className="img-fluid"
                    />
                    <div className="doctor-book-card-content tile-card-content-1">
                      <div>
                        <h3 className="card-title mb-0">{card.title}</h3>
                        <a
                          href={card.link}
                          className="btn book-btn1 px-3 py-2 mt-3"
                          tabIndex="0"
                        >
                          {card.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Category;
