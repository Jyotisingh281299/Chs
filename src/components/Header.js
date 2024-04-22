import React, { useState } from 'react';
import ChsLogo from '../assets/img/chs_logo.png';
import { Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from '../Data';


function Header() {
  const location = useLocation();
  return (
    <header className="header header-trans header-two">
      <Container>
        <Nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link id="mobile_btn" to="javascript:void(0);">
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </Link>
            <Link to="/" className="navbar-brand logo">
              <img src={ChsLogo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img src={ChsLogo} className="img-fluid" alt="Logo" />
              </Link>
              <Link id="menu_close" className="menu-close" to="javascript:void(0);">
                <i className="fas fa-times"></i>
              </Link>
            </div>
            <ul className="main-nav">
              {Navbar.map(({ menu_name, path, submenu }, nav_item) => (
                <li className={`${location.pathname === path ? 'active' : ''} ${submenu ? 'has-submenu' : ''}`} key={nav_item}>
                  {submenu ? (
                    <>
                      <a href="javascript:void(0);">
                        {menu_name} <i className="fas fa-chevron-down"></i>
                      </a>
                      <ul className="submenu">
                        {submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link to={subItem.path}>{subItem.menu_name}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={path}>{menu_name}</Link>
                  )}
                </li>
              ))}
              <li className="login-link">
                <Link to="/">Login / Signup</Link>
              </li>
            </ul>


          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-login" to='/'>login / Signup</Link>
            </li>
          </ul>
        </Nav>
      </Container>
    </header>
  )
}

export default Header;