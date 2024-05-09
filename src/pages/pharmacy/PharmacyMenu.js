import React from "react";
import '../pharmacy/Pharmacy.css';
import browsecategory_icon from '../../assets/img/icons/browse-categorie.svg';
import logo_img from '../../assets/img/chs_logo.png';


export default function PharmacyMenu() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg header-nav">
                    <div className="navbar-header" style={{ display: 'none' }}>
                            <a id="mobile_btn" href="javascript:void(0);">
                                <span className="bar-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </a>
                            <a href="/" className="navbar-brand logo">
                                <img src={logo_img} className="img-fluid" alt="Logo"/>
                            </a>
                        </div>
                        <div className="browse-categorie">
                            <div className="dropdown categorie-dropdown">
                                <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown">
                                    <img src={browsecategory_icon} alt="Img"/> Browse Categories
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);">Ayush</a>
                                    <a className="dropdown-item" href="javascript:void(0);">Covid Essentials</a>
                                    <a className="dropdown-item" href="javascript:void(0);">Devices</a>
                                    <a className="dropdown-item" href="javascript:void(0);">Glucometers</a>
                                </div>
                            </div>
                        </div>
                        <div className="main-menu-wrapper">
                            <div className="menu-header">
                                <a href="/" className="menu-logo">
                                    <img src={logo_img} className="img-fluid" alt="Logo"/>
                                </a>
                                <a id="menu_close" className="menu-close" href="javascript:void(0);">
                                    <i className="fas fa-times"></i>
                                </a>
                            </div>
                            <ul className="main-nav">
                                <li className="has-submenu megamenu">
                                    <a href="javascript:void(0);">Home </a>
                                </li>
                                <li className="has-submenu">
                                    <a href="javascript:void(0);">Doctors </a>
                                </li>
                                <li className="has-submenu">
                                    <a href="javascript:void(0);">Patients </a>
                                </li>
                                <li className="has-submenu active">
                                    <a href="javascript:void(0);">Pharmacy </a>
                                </li>
                                <li className="has-submenu">
                                    <a href="#">Blog <i className="fas fa-chevron-down"></i></a>
                                    <ul className="submenu">
                                        <li><a href="blog-list.html">Blog List</a></li>
                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <a href="#">Admin <i className="fas fa-chevron-down"></i></a>
                                    <ul className="submenu">
                                        <li><a href="admin/index.html" target="_blank">Admin</a></li>
                                        <li><a href="pharmacy/index.html" target="_blank">Pharmacy Admin</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>



           
        </>
    )
}