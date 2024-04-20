import React from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import user_img from '../assets/img/profile-06.jpg';
import { Link } from "react-router-dom";

function PatientSidebar() {
    return (
        <>
            <Col xl='3' lg='4' className="theiaStickySidebar">
                <div className="profile-sidebar patient-sidebar profile-sidebar-new">
                    <div className="widget-profile pro-widget-content">
                        <div className="profile-info-widget">
                            <Link to="#" className="booking-doc-img">
                                <img src={user_img} alt="User Image" />
                            </Link>
                            <div className="profile-det-info">
                                <h3><Link href="#">Hendrita</Link></h3>
                                <div className="patient-details">
                                    <h5 className="mb-0">Patient ID : PT254654</h5>
                                </div>
                                <span>Female <i className="fa-solid fa-circle"></i> 32 years 03 Months</span>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-widget">
                  
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                       
                            <Nav variant="pills" className="flex-column dashboard-menu">

                            <ul>
                                <li className="active">
                                    <Link to="#">
                                        <i className="fa-solid fa-shapes"></i>
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <i className="fa-solid fa-calendar-days"></i>
                                        <span>My Appointments</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/HealthRecord">
                                        <i className="fa-solid fa-shield-halved"></i>
                                        <span>Health Report</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa-solid fa-user-pen"></i>
                                        <span>Profile Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa-solid fa-key"></i>
                                        <span>Change Password</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa-solid fa-calendar-check"></i>
                                        <span>Logout</span>
                                    </Link>
                                </li>
                            </ul>
                                <Nav.Item>
                                <Nav.Link eventKey="first"> <i className="fa-solid fa-shapes"></i> Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second"> <i className="fa-solid fa-shapes"></i> Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            
                          
                            <Tab.Content>
                                <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                            </Tab.Content>
                           
                     
                        </Tab.Container>

                    </div>
                </div>
            </Col>
        </>
    )
}

export default PatientSidebar